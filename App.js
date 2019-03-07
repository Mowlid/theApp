/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import SearchBar from './src/components/SearchBar/SearchBar';
import ListItem from './src/components/ListItems/ListItem'
import { ScrollView } from 'react-native-gesture-handler';
import userImage from './assets/userImage.png';
import UserDetails from './src/components/UserDetails/UserDetails';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: "",
      places : [],
      userSelected: null
    }

    this.getUsers()
    .then((res) => this.readUsers(res));
  }

  getUsers = () => {
    return fetch("http://9.233.193.241:9000/records")
    .then((res) =>res.json());
  }
  readUsers = users =>{
    let userAdded = [...users];
    this.setState({
      places: userAdded
    })
  }
  searchUser = userName => {
    this.setState({
      userName : userName
    });
  }

  userSearchSubmit = () => {
    this.setState(prevState => {
      return {
        places: this.state.places.filter(user => {
        return user.Name.includes(this.state.userName) || user.Name == this.state.userName;
      })
    }
    })
  }

  userSelectedHandler = (userId) => {
    this.setState(prevState => {
      return {
        userSelected: prevState.places.find(user => {
          return user._id === userId;
        })
      }
    })
  }

  modelClosed = () => {
    this.setState({
      userSelected: null
    })
  }
  removeItem = index => {
    let filterPlaces = this.state.places.filter(item => item._id !== index);
    this.setState(prevState => {
      return {
        places: filterPlaces
      }
    })
  }

  render() {
    return (
      
      <View style={styles.container}> 
       <View style={{width:'100%', marginTop:30, padding:20, backgroundColor:'#045079'}}>
         <Text style={{color:'white', fontWeight:'bold'}}>BloodDonor+</Text>
       </View>
       <SearchBar userName={this.state.userName} userNameChange={this.searchUser}
                 userSearchSubmit={this.userSearchSubmit}/>
      <ScrollView style={{width:'100%'}}>
       <UserDetails selectedUser={this.state.userSelected}
                    onClosed={this.modelClosed} userImage={userImage}/>
        <ListItem removeItem = {this.removeItem} places={this.state.places}
                  userImage={userImage}
                  onUserSelected={this.userSelectedHandler}
        />
        </ScrollView>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop:10

  }
});
