import React, { Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Container, Content, Left, Icon, Header, Button } from 'native-base';
import MenuItem from '../../components/MenuItem';


export default class OperatorStorageScreen extends Component {
    render() {
        return (
            <Container>
                <Header />
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <ImageBackground style={styles.container}>
                        <View style={styles.overlayContainer}>

                            <View style={styles.top}>
                                <Text style={styles.header}>OPERATOR STORAGE </Text>
                            </View>

                            <View style={styles.menuContainer}>
                                {/* <MenuItem itemImage={require('../../assets/iconscan.jpg')} /> */}
                                <Button transparent onPress={(()=>{alert('scan barcode'); })} style={styles.btn}>
                               <Image source={require('../../assets/qr-code.png')} style={styles.image}/>
                            </Button>
                                <Button style={styles.scan} onPress={(()=>{alert('scan barcode'); })}>
                                    <Text style={styles.text}> SCAN BARCODE </Text>
                                    </Button>
                            </View>

                        </View>
                    </ImageBackground>
                </Content>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '200%',
        height: '100%',
        backgroundColor:'white'
    },
    overlayContainer: {
        flex: 1,
    },
    top: {
        height: '30%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        color: 'black',
        fontSize: 28,
        borderColor: 'black',
        borderWidth: 2,
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        backgroundColor: 'rgba(255,255,255, .1)'
    },
    menuContainer: {
        height: '80%',
        width: '80%',
        flexWrap: 'wrap',
        alignContent: 'center',
        marginLeft: '36%'
    },
    text: {
        fontSize: 20,
        color:'#fff',
        textAlign: 'center',
    },
    scan: {
        marginTop: 26,
        paddingTop: 10,
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: 'orange'
    }

});