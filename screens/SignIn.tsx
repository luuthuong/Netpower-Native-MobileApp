import {
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {Component, useState} from 'react';
import FormCustom from '../components/FormCustom';
import {styles} from '../styles/style';
import {FormContent} from '../data/data';
import { inject ,observer} from 'mobx-react';

function SignIn({action, nav,store}) {
  return (
    <SafeAreaView style={styles.FullSrcreen}>
      <FormCustom
        action={() => {
          console.log('action');
        }}
        title="Sign In"
        data={FormContent.signIn}>
        <View>
          <TouchableHighlight
            onPress={()=>nav.navigate('home')}
            style={{...styles.Button, backgroundColor: '#1f4037'}}>
            <Text style={styles.TextCenter}>Sign In</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => action(false)}
            style={styles.Button}>
            <Text style={styles.TextCenter}>Have Account? Sign Up</Text>
          </TouchableHighlight>
        </View>
      </FormCustom>
    </SafeAreaView>
  );
}
export default inject('store')(observer(SignIn)) ;
