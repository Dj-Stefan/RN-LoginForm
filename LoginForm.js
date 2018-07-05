import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar, Button, Alert, Vibration} from 'react-native';
import { Contacts } from 'expo';
import Expo from 'expo';

export default class App extends React.Component {
  state = {
    username: '',
    password: ''
};
  render() 
  {
    return (
    
    <View>
      <View style={styles.container}>
        <StatusBar 
            barStyle="light-content" 
        />
        <TextInput 
            style={styles.input}
            placeholder="Username or e-mail"        //tekst u inputu pre pocetka kucanja
            placeholderTextColor='#FFF'             //boja tog teksta
            returnKeyType="next"                    //postavljanje teksta dugmeta 'return' tastature mobilnog na next
            onSubmitEditing ={()=>this.passwordInput.focus()}       //kada se dodirne next da predje na pass input
            keyboardType="email-address"       //tip tastature koji koristi uredjaj da bude mail-addres\
            onChangeText={(value) => this.setState({username: value})}
            value={this.state.username}
                         
        />
        <TextInput 
            style={styles.input}
            placeholder="Password"
            placeholderTextColor='#FFF'
            secureTextEntry                              //postavljanje asteriksa
            returnKeyType="go"                      //postavljanje teksta dugmeta 'return' tastature mobilnog na go
            ref={ (input) => this.passwordInput = input}   //postavljanje reference
            onChangeText={(value) => this.setState({password: value})}
            value={this.state.password}
         />
        <View style={styles.buttonContainer}>
          <Button                                       //kreiranje buttona
              title="LOGIN" 
              color= 'red'
              onPress={() =>
                {
                  if(this.state.username.localeCompare('User')!=0 || this.state.password.localeCompare('1234')!=0)
                  {
                    Alert. alert("Neuspesno");
                    Vibration.vibrate(1)              //dodavanje vibracije, obicno je 500ms i fiksno je  
                  }
                  else
                  {
                    Alert.alert("Uspesno");
                  }
                }
              }
          />
        </View>
      </View>

      <View  style={styles.SINGUP }>
        <Button 
          onPress={() => {
            Alert.alert(                        //popup sa obavestenjem
              "Contact admin!\n"+
              "Email: sdjokic722@gmail.com"
            )      
          }}
          title ="HELP"
          color ="red" 
          pageX = '158'
          />
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: 
  {
    padding: 20, //odvojio sa svih srana po 20
  },

  input:
  {
      height: 40,
      backgroundColor: 'red',   
      marginBottom: 10, //razmak od donje ivice
      color: '#FFF', //postavljanje da tekst koji se unosi bude bele boje
      paddingHorizontal: 10, //odvajanje od ivica po horizontali za 10
      opacity: 0.75
  },

  buttonText:
  {
      textAlign: 'center',
      color: '#FFF',
      fontWeight: '900', //debljina teksta
  },

  SINGUP:
  {
    backgroundColor: 'black',
    opacity: 0.5,  
    width: 'auto',
    marginLeft: 95,
    marginRight: 95,
    borderBottomColor: '#47315a',
  },

  buttonContainer:
  {
    backgroundColor:'darkgray',
    width: 'auto',
    marginLeft: 65,
    marginRight: 65,
  }

});
