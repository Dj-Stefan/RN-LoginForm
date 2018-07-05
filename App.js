import React from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import LoginForm from './LoginForm';

export default class App extends React.Component {
  render() 
  {
    return (
      <ScrollView style={styles.skrol}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>  //poneranje forme zbog preglednosti behavior
          <View style={styles.container}>
            <View style={styles.logoConatiner}>
              <Image source={require('./586817064-microsoft-wallpapers-2015.png')} style={styles.logo}/>
              <Text style={styles.tittle}>An app made for WINDOWS using <Text style={styles.wind} >React Naative!</Text></Text>
            </View>
            
            <View style={styles.formContainer}>
              <LoginForm/>                                                //pozivanje login forme
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //pokrivenost ekrana pozadinom
    backgroundColor: 'gray',
  },

  logo:
  {
    marginTop: 20,
     width:375,
     height:290,
  },

  logoConatiner:
  {
    flexGrow: 0.28, //pomera Container po vertikali
    alignItems: 'center',
    justifyContent: 'center',   
  },

  tittle:
  {
    color: 'darkred', //boja slova
    marginTop: 15,
    width: 250, 
    textAlign: 'center', //text na sredini
    opacity: 0.9, //neprozornost
    fontWeight: '700',
  },

  wind:
  {
    color: '#ffd700',
    fontWeight: '900'
  }, 

  skrol:
  {
    backgroundColor: 'gray',
  },
});
