import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './src/screens/HomeScreenUser';
import LoginForm from './src/screens/Login/LoginForm';
import RegisterForm from './src/screens/Login/Regform';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import CustomHeader from './src/components/CustomHeader/Drawer';
import Fetch from './src/components/User/SenderForm';
import UsersScreen from './src/screens/UserScreen';
import MyComponent from './src/components/User/TrakingTable';
import OperatorStorageScreen from './src/screens/OperatorStorage';
import UserExample from './src/screens/HomeScreenUser/user';
import UserProfileView from './src/screens/UserScreen/Profile';
import {Root} from 'native-base';
import {Provider} from 'react-redux';
import ScanScreen from './src/screens/Scan/scanScreen';
import {createStore, combineReducers} from 'redux';
import CourierScreen from './src/screens/couriersScreen';
import Main from './src/components/Chat/Main';
import Chat from './src/components/Chat/Chat';
import SplashScreen from './native-base-theme/components/splashScreen/SplashScreen';
import {findAllUsers} from './src/reducer/user/user';
import LoginReducer from './src/reducer/user/LoginReducer';
import UserChatScreen from './src/screens/ChatScreen/UserChatScreen';
import StorageChat from './src/screens/ChatScreen/StorageChat';

const DrawNavigator = createDrawerNavigator(
  {
    Courier: {screen: CourierScreen},
    OperatorStorage: {screen: OperatorStorageScreen},
    // ListData:{screen: DataListScreen},
    Logout: {screen: LoginForm},
    HomeScreen: {screen: HomeScreen},
    Main,
    Chat,
  },
  {
    // initialRouteName: 'OperatorPos',
    // initialRouteName: 'OperatorStorage',
    contentComponent: props => <CustomHeader {...props} />,
  },
);

const AppStackNavigator = createStackNavigator(
  {
    LoginForm: LoginForm,
    RegisterForm: RegisterForm,
    // DataScreen,
    DrawNavigator,
    Fetch,
    OperatorStorageScreen,
    MyComponent,
    UsersScreen,
    ScanScreen,
    UserChatScreen,
    StorageChat,
    UserExample,
    UserProfileView,
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

const allReducers = combineReducers({
  findAllUsers,
  LoginReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    console.log('sampe');
    state = undefined;
  }
  return allReducers(state, action);
};
const store = createStore(rootReducer);
const AppContainer = createAppContainer(AppStackNavigator);

export default () => (
  <Provider store={store}>
    <Root>
      <AppContainer />
    </Root>
  </Provider>
);

// const AppContainer = createAppContainer(AppStackNavigator);

// const appReducer = combineReducers({
//   userActive: userActiveReducer,
//   myUser: myUserReducer
// });

// const rootReducer = (state, action) => {
//   if (action.type === 'LOGOUT') {
//     console.log('sampe')
//     state = undefined;
//   }
//   return appReducer(state, action);
// };

// const store = createStore(rootReducer);

// export default class App extends Component{
//   render(){
//     return(
//       <Root>
//       <Provider store={store}>
//         <AppContainer />
//       </Provider>
//     </Root>
//     )
//   }
// }
