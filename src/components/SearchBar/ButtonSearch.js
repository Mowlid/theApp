import React from 'react';
import { Button} from 'react-native';
import { StyleSheet} from 'react-native';

const ButtonSearch = (props) => (
<Button title="Search" style={{color:'#ddd', height:50, width:'30%', borderColor:'#ddd', borderWidth:1}}
onPress = {props.userSearchSubmit} />
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      flexDirection:'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingTop:50
  
    },
    inputContainer: {
      padding:20,
      paddingTop:50,
      backgroundColor: '#fff',
      alignItems:'center',
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%'
    },
    listContainer: {
      padding:20,
      paddingTop:10,
      backgroundColor: '#fff',
      alignItems:'flex-start',
      flexDirection:'column',
      justifyContent:'space-between',
      width:'100%'
    }
  });
  
export default ButtonSearch;