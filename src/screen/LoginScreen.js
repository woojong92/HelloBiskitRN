import React, {useEffect} from 'react';
import { SafeAreaView, View, Button, StyleSheet, Platform, Alert } from 'react-native';
import FBLoginButton from '../components/FBLoginButton';

import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';

export default function LoginScreen() {

    useEffect(() => {
        GoogleSignin.configure({
            // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '506219587507-l4ra6dtpah6nhl1escl98v2sb9b1srll.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            // hostedDomain: '', // specifies a hosted domain restriction
            // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            // forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
            // accountName: '', // [Android] specifies an account name on the device that should be used
            // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
          });
    }, []) 

    const signIn = async () => {
      console.log('signIN')
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo)
        } catch (error) {
            console.log('google signin error\n'  + error)
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
          }
        }
      };

    return (
        <SafeAreaView style={styles.container}>
            <FBLoginButton/>

            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={async() =>await signIn()}
                // disabled={this.state.isSigninInProgress} 
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