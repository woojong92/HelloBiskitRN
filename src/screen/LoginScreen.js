import React, {useEffect} from 'react';
import { 
  SafeAreaView, 
  Button, 
  StyleSheet, 
  NativeModules,
  Alert,
  NativeEventEmitter
} from 'react-native';
import FBLoginButton from '../components/FBLoginButton';
import GoogleLoginButton from '../components/GoogleLoginButton';
import NaverLoginButton from '../components/NaverLoginButton';
import KakaoLoginButton from '../components/KakaoLoginButton';

const { Console: RNConsole }  = NativeModules;
const emitter = new NativeEventEmitter(RNConsole);

const subscription = emitter.addListener(
  'my_event',
  (evt) => console.log(evt)
)

export default function LoginScreen() {

    return (
        <SafeAreaView style={styles.container}>
            <FBLoginButton />
            <GoogleLoginButton />
            <NaverLoginButton />
            <KakaoLoginButton />

            <Button 
              title="RNConsole"
              style={{
                width: 200,
                height: 20
              }}
              onPress={async () => {
                try{
                  const result = await RNConsole.writeTextWithPromise('Error');
                  Alert.alert('result', result)
                }catch(error){
                  Alert.alert(`${error}`)
                }
              }}
            />

            <Button 
              title="TimerEmitter"
              style={{
                width: 200,
                height: 20
              }}
              onPress={async () => {
                RNConsole.runTimer();
                // const subscription = emitter.addListener(
                //   'my_event',
                //   (evt) => console.log(evt)
                // )
              }}
            />
            </SafeAreaView>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})