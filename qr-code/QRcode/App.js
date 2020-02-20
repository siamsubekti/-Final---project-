import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Linking, 
  TouchableHighlight, 
  PermissionsAndroid, 
  Platform, 
  StyleSheet} from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      qrvalue: '',
      opneScanner: false,
    };
  }
  onOpenlink() {
    Linking.openURL(this.state.qrvalue);
  }
  onBarcodeScan(qrvalue) {
    this.setState({ qrvalue: qrvalue });
    this.setState({ opneScanner: false });
  }
  onOpneScanner() {
    var that =this;
    if(Platform.OS === 'android'){
      async function requestCameraPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,{
              'title': 'CameraExample App Camera Permission',
              'message': 'CameraExample App needs access to your camera '
            }
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            that.setState({ qrvalue: '' });
            that.setState({ opneScanner: true });
          } else {
            alert("CAMERA permission denied");
          }
        } catch (err) {
          alert("Camera permission err",err);
          console.warn(err);
        }
      }
      requestCameraPermission();
    }else{
      that.setState({ qrvalue: '' });
      that.setState({ opneScanner: true });
    }    
  }
  render() {
    let displayModal;
    if (!this.state.opneScanner) {
      return (
        <View style={styles.container}>
            <Text style={styles.heading}>GED QR Code</Text>
            <Text style={styles.simpleText}>{this.state.qrvalue ? 'Scanned QR Code: '+this.state.qrvalue : ''}</Text>
            {this.state.qrvalue.includes("http") ? 
              <TouchableHighlight
                onPress={() => this.onOpenlink()}
                style={styles.button}>
                  <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Open Link</Text>
              </TouchableHighlight>
              : null
            }
            <TouchableHighlight
              onPress={() => this.onOpneScanner()}
              style={styles.button}>
                <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                Open QR Scanner
                </Text>
            </TouchableHighlight>
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen
          showFrame={false}
          scanBarcode={true}
          laserColor={'blue'}
          frameColor={'yellow'}
          colorForScannerFrame={'black'}
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'white'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2c3539',
    padding: 10,
    width:300,
    marginTop:16
  },
  heading: { 
    color: 'black', 
    fontSize: 24, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 30 
  },
  simpleText: { 
    color: 'black', 
    fontSize: 20, 
    alignSelf: 'center', 
    padding: 10, 
    marginTop: 16
  }
});