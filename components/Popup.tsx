import React from 'react'
import { SafeAreaView, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import { PopupContent } from './../data/data';

function Popup({style,navigation}:any) {
  return (
    <SafeAreaView style={style}>
      <View>
        {
          PopupContent.map((item,index)=><TouchableHighlight underlayColor={'#999'} onPress={()=>navigation.navigate(item.path)} key={index} style={PopupStyle.Button}>
          <Text style={{color:'#0008',fontWeight:'500'}}>{item.title}</Text>
      </TouchableHighlight>)
        }
      </View>
    </SafeAreaView>
  )
}

const PopupStyle=StyleSheet.create({
  Button:{
    padding:5,
  }
})

export default Popup