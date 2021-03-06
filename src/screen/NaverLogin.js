import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Button,
  Platform,
} from 'react-native';
import { NaverLogin, getProfile } from '@react-native-seoul/naver-login';

const ioskeys = {
  kConsumerKey: 'bthaRU1Qy7viaPLp6gni',
  kConsumerSecret: 'Ei7cVjVZos',
  kServiceAppName: 'HelloBiskitRn',
  kServiceAppUrlScheme: 'naverlogin', // only for iOS
};

const androidkeys = {
  kConsumerKey: 'bthaRU1Qy7viaPLp6gni',
  kConsumerSecret: 'Ei7cVjVZos',
  kServiceAppName: 'HelloBiskitRn',
};

const initials = Platform.OS === 'ios' ? ioskeys : androidkeys;

const App = () => {
  const [naverToken, setNaverToken] = React.useState(null);

  const naverLogin = props => {
    return new Promise((resolve, reject) => {
      NaverLogin.login(props, (err, token) => {
        console.log(`\n\n  Token is fetched  :: ${token} \n\n`);
        setNaverToken(token);
        if (err) {
          reject(err);
          return;
        }
        resolve(token);
      });
    });
  };

  const naverLogout = () => {
    NaverLogin.logout();
    setNaverToken(null);
  };

  const getUserProfile = async () => {
    const profileResult = await getProfile(naverToken.accessToken);
    if (profileResult.resultcode === '024') {
      Alert.alert('로그인 실패', profileResult.message);
      return;
    }
    console.log('profileResult', profileResult);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="네이버 아이디로 로그인하기"
        onPress={() => naverLogin(initials)}
      />
      {!!naverToken && <Button title="로그아웃하기" onPress={naverLogout} />}

      {!!naverToken && (
        <Button title="회원정보 가져오기" onPress={getUserProfile} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

export default App;