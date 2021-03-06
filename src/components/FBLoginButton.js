import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton, AccessToken } from 'react-native-fbsdk';

export default function FBLoginButton() {

    return (
      <View>
        <LoginButton
          publishPermissions={["email"]}
          onLoginFinished={
            (error, result) => {
              if (error) {
                alert("Login failed with error: " + error.message);
              } else if (result.isCancelled) {
                alert("Login was cancelled");
              } else {
                alert("Login was successful with permissions: " + result.grantedPermissions)
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("User logged out")}/>
      </View>
    );
};
