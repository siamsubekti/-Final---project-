import React from 'react';
import {Button, Footer, FooterTab, Icon, Text} from "native-base";
import {withNavigation} from 'react-navigation';
import {StyleSheet} from "react-native";

class FooterSegment extends React.Component {
    render() {
        return (
            <Footer style={{ backgroundColor: '#F69314'}}>
                <FooterTab>
                    <Button onPress={() => {
                        this.props.navigation.navigate('HomeScreen')
                    }}>
                        <Icon style={styles.buttonFooterText} name="home"/>
                        <Text style={styles.buttonFooterText}>Home</Text>
                    </Button>
                    <Button onPress={() => {
                        this.props.navigation.navigate('Profile')
                    }}>
                        <Icon style={styles.buttonFooterText} name="person" onPress={()=>{
                            this.props.navigation.navigate('UserProfileView')
                        }}/>
                        <Text style={styles.buttonFooterText}>Profile</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

const
    styles = StyleSheet.create({
        buttonFooterText: {
            color: '#ffffff',
        },
    });
export default withNavigation(FooterSegment);
