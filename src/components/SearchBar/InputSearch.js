import React from 'react';
import { StyleSheet, TextInput} from 'react-native';

const InputSearch = (props) => (
<TextInput style={{ backgroundColor:'white', borderColor:'#ddd', padding:5, 
                                borderWidth:1, 
                                height:35, 
                                width:'70%' 
                              }}
            placeholder="Search Blood Donor Near You"
            value={props.placeName} 
            onChangeText={props.userNameChange}/>
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
    paddingTop:10,
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

export default InputSearch;