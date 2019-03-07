
import React from 'react';
import { StyleSheet, View} from 'react-native';
import ButtonSearch from './ButtonSearch';
import InputSearch from './InputSearch';
const SearchBar = (props) =>(
    <View style={styles.inputContainer}>
        <InputSearch placeName={props.placeName} userNameChange={props.userNameChange}/>
        <ButtonSearch userSearchSubmit={props.userSearchSubmit} />
    </View>
);
const styles = StyleSheet.create({

    inputContainer: {
      padding:20,
      paddingTop:30,
      backgroundColor: '#000',
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%'
    },
  });
  

export default SearchBar;