// import React, { Component } from 'react';
// import { View, Text, StyleSheet, ImageBackground,Image } from 'react-native';
// import { Container, Content, Left, Header, Button } from 'native-base';
// import Icon from 'react-native-ionicons';
// import MenuItem from '../../../components/MenuItem';
// import { TouchableHighlight } from 'react-native-gesture-handler';



// class HomeScreen extends Component{

//     // static navigationOptions ={
//     //     drawerIcon:(
//     //         <Image source={require('../../../assets/logo.jpg')} style={{height:24, width:24}}/>
//     //     )
//     // }

//     render(){
//         return(
//             <Container>
//                 <Header>
//                 {/* //  navigation={this.props.navigation.openDrawer} icon={<Icon name="menu" />} title="Dashboard">  */}
//                     {/* <Left title="Dashboard">
//                         <Icon name='menu' onPress={()=> this.props.navigation.openDrawer()}/>
//                     </Left> */}
//                 </Header>
//                 <Content contentContainerStyle={{
//                     flex:1,
//                     alignItems: 'center',
//                     justifyContent:'center'
//                 }}>

//                     <ImageBackground source={require('../../../images/wallpaper.png')} style={styles.container}>
//                         <View style={styles.overlayContainer}>

//                             <View style={styles.top}>
//                                 <Text style={styles.header}>OPERATOR POS </Text>
//                             </View>

//                             <View style={styles.menuContainer}>

//                             <Button transparent onPress={()=>{this.props.navigation.navigate('ScanScreen')}} style={styles.btn}>
//                                <Image source={require('../../../assets/scan-qr-code.png')} style={styles.image}/>
//                             </Button>
//                             <Button transparent onPress={(()=>{alert('my account'); })} style={styles.btn}>
//                                <Image source={require('../../../assets/account.jpg')} style={styles.image}/>
//                             </Button>
//                             <Button transparent onPress={()=>{this.props.navigation.navigate('ListData')}} style={styles.btn}>
//                                <Image source={require('../../../assets/icondocument.png')} style={styles.image}/>
//                             </Button>
//                             <Button transparent onPress={()=>{this.props.navigation.navigate('Logout')}} style={styles.btn}>
//                                <Image source={require('../../../assets/iconLogout.jpg')} style={styles.image}/>
//                                {/* <Icon name='barcode-scan'/> */}
//                             </Button>
//                             </View>
//                         </View>
//                     </ImageBackground>
//                 </Content>
//             </Container>
//         )
//     }
// }

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         width: '100%',
//         height: '100%',
//     },
//     overlayContainer:{
//         flex:1,
//         // backgroundColor:'rgba(153,255,0,0.2)'
//     },
//     top:{
//         height:'30%',
//         alignItems:'center',
//         justifyContent:'center',
//     },
//     header:{
//         color:'#fff',
//         fontSize:28,
//         borderColor:'#fff',
//         borderWidth:2,
//         padding:20,
//         paddingLeft:40,
//         paddingRight:40,
//         backgroundColor:'rgba(255,255,255, .1)'
//     },
//     menuContainer:{
//         height: '50%',
//         flexDirection: 'column',
//         flexWrap:'wrap',
//         alignContent: 'center'

//     },
//     image:{
//         width: '100%',
//         height: '100%',
//         opacity: 0.8,
//         borderColor: '#fff',
//     },
//     btn:{
//         width: '40%',
//         height: '50%',
//         padding: 20,

//     }

// });
// export default HomeScreen;

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
} from 'react-native';
import { Container, Content } from 'native-base';
import { logout } from '../../../actions';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, title: "Scan Barcode", image: "https://img.icons8.com/cotton/80/000000/barcode-scanner--v3.png" },
                { id: 2, title: "Transaction List", image: "https://img.icons8.com/officel/80/000000/address-book.png" },
                { id: 3, title: "LogOut", image: "https://img.icons8.com/color/70/000000/shutdown.png" },
                { id: 4, title: "Profile", image: "https://img.icons8.com/color/70/000000/administrator-male.png" },
            ]
        };
    }

    // clickEventListener(item) {
    //     Alert.alert(item.title)
    // }

    async componentWillMount() {
        this.setState({ loading: false });
    }

    doItemMenu(item) {

        if (item.title === "Scan Barcode") {
            this.props.navigation.navigate('ScanScreen')
        }
        else if (item.title === "Transaction List") {
            this.props.navigation.navigate('DataListScreen')
        }
        else if (item.title === "Profile") {
            this.props.navigation.navigate('ScoliosisInformation')
        }
    }


    render() {
        return (
            <Container>
                <Content contentContainerStyle={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                   
                                         <View style={styles.top}>
                                        <Text style={styles.header}>OPERATOR POS </Text>
                                    </View>
                    <View style={styles.container}>
                        <FlatList style={styles.list}
                            contentContainerStyle={styles.listContainer}
                            data={this.state.data}
                            horizontal={false}
                            numColumns={2}
                            keyExtractor={(item) => {
                                return item.id;
                            }}
                            renderItem={({ item }) => {
                                return (
                                   
                                    <View>
                                        <TouchableOpacity style={styles.card} onPress={() => { this.doItemMenu(item) }}>
                                            <Image style={styles.cardImage} source={{ uri: item.image }} />
                                        </TouchableOpacity>

                                        <View style={styles.cardHeader}>
                                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                                <Text style={styles.title}>{item.title}</Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }} />
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#F69314',
    },
    list: {
        paddingHorizontal: 5,
        backgroundColor: "white",
    },
    listContainer: {
        alignItems: 'center'
    },
    top: {
        height:'20%',
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
    /******** card **************/
    card: {
        shadowColor: '#F69314',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
        marginVertical: 20,
        marginHorizontal: 40,
        backgroundColor: "#F69314",
        //flexBasis: '42%',
        width: 120,
        height: 120,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardHeader: {
        paddingVertical: 17,
        paddingHorizontal: 16,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center"
    },
    cardContent: {
        paddingVertical: 12.5,
        paddingHorizontal: 16,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12.5,
        paddingBottom: 25,
        paddingHorizontal: 16,
        borderBottomLeftRadius: 1,
        borderBottomRightRadius: 1,
    },
    cardImage: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    },
    title: {
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        color: "#696969"
    },
});

const mapStateToProps = (state) => {
    return { posActive: state.posActive };
};


const mapDispatchToProps = {
    logout: logout
};

export default withNavigation(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));