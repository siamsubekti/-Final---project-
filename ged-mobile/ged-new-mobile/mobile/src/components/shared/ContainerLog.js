// import React from 'react';
// import {Platform, StatusBar, StyleSheet} from "react-native";
// import {Container, Content, Drawer} from "native-base";
// import Sidebar from "./Sidebar";
//
// class ContainerLog extends React.Component {
//     openDrawer = () => {
//         this.drawer._root.open();
//     };
//
//     render() {
//         return (
//             <Drawer
//                 ref={(ref) => {
//                     this.drawer = ref;
//                 }}
//                 content={<Sidebar/>}>
//                 <Container style={styles.container}>
//                     <Content padder>
//                         {this.props.children}
//                     </Content>
//                 </Container>
//             </Drawer>
//         )
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         ...Platform.select({
//             android: {
//                 marginTop: StatusBar.currentHeight
//             }
//         })
//
//     }
// });
//
// export default ContainerLog;

import React from 'react';
import {Platform, StatusBar, StyleSheet} from "react-native";
import {Button, Container, Content, Header, Icon, Left, Right} from "native-base";
import {withNavigation} from "react-navigation";


class ContainerLog extends React.Component {
    render() {
        return (

            <Container style={styles.container}>
                <Header style={{ backgroundColor:'#F69314'}}>
                    <Left>
                        <Button
                            transparent
                            onPress={() => {
                                this.props.navigation.navigate('Main')
                            }}
                        >
                            <Icon name="arrow-round-back"/>
                        </Button>
                    </Left>
                    <Right/>
                </Header>
                <Content>
                    {this.props.children}
                </Content>

            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'transparent',
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        })

    }
});
export default withNavigation(ContainerLog);
