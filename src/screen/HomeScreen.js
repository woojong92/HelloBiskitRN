import React, {useEffect} from 'react';
import { StatusBar, SafeAreaView, View, Text, Alert, TouchableOpacity } from 'react-native';
// import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled, { css } from '@emotion/native';

const HorizontalLine = () => <View style={{border: 0, borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5', marginHorizontal: 15}}></View>;
const VerticalLine = () => <View style={{border: 0, borderLeftWidth: 0.5, borderLeftColor: '#e5e5e5', marginVertical: 15}}></View>

const MenuItem = styled.TouchableOpacity`
  flex: 0.5;
  justify-content: center;
  align-items: center;
`;

const HomeScreen = ({ navigation }) => {

    return (
      <>
        <StatusBar barStyle="light-content"/>
        <SafeAreaView style={{flex: 1, backgroundColor: '#111'}}>

          {/* Header */}
          <View 
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: "100%", 
              height: 50, 
              border: 0, 
              paddingHorizontal: 20
            }}
          >
            <TouchableOpacity onPress={ () => navigation.openDrawer() }> 
              <Icon name='bars' size={24} color='#fff'/>
            </TouchableOpacity>

            <View style={{justifyContent: 'center', width: 200}}>
              <Text style={{color: '#fff', fontSize: 24, fontWeight: '500', textAlign: 'center'}}>MOONBUCKS</Text>
            </View>
            
            <View><Icon name='bell-o' size={24} color='#fff'/></View>
          </View>
          {/* Header End */}

          {/* welcom message */}
          <View style={{justifyContent: 'center', width: '100%', height: 30, backgroundColor: '#333'}}> 
            <Text style={{color: "#fff", fontSize: 15, textAlign: 'center'}}>안녕하세요. 문벅스입니다.</Text> 
          </View>
          {/* welcom message End*/}

          <View style={{flex: 1, flexDirection: 'column'}}>
            
            <View style={{flex: 0.4, flexDirection: 'row'}}>

             <MenuItem onPress={()=>Alert.alert('alert')}>
                  <View><Icon name='moon-o' size={50} color='#fff'/></View>
                  <Text style={{color: '#fff'}}>스탬프</Text>
              </MenuItem>

              <VerticalLine />              
              
              <MenuItem>
                <View><Icon name='credit-card-alt' size={50} color='#fff'/></View>
                <Text style={{color: '#fff'}}>Card</Text>
              </MenuItem>
            </View>

            <HorizontalLine />

            <View style={{flex: 0.3, flexDirection: 'row'}}>
              <MenuItem>
                <View><Icon name='coffee' size={50} color='#fff'/></View>
                <Text style={{color: '#fff'}}>Siren Order</Text>
              </MenuItem>
              
              <VerticalLine />

              <MenuItem>
                <View><Icon name='gift' size={50} color='#fff'/></View>
                <Text style={{color: '#fff'}}>Gift Shop</Text>
              </MenuItem>
            </View>

            <HorizontalLine />

            <View style={{flex: 0.3, flexDirection: 'row'}}>
              <MenuItem>
                <Text style={{color: '#fff'}}>e-Coupon</Text>
              </MenuItem>

              <VerticalLine />
              
              <MenuItem>
                <Text style={{color: '#fff'}}>What's New</Text>
              </MenuItem>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
}

export default HomeScreen;