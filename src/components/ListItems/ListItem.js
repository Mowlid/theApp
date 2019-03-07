import React from 'react';
import { Button} from 'react-native';
import { StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';

const ListItem = (props) => (
    <View style={styles.listContainer}>
            {props.places.map(item => (
              <View style={styles.listItem} key={item._id} >
                  <View style={{borderRightWidth:1, borderColor:'#eee'}}>
                    <Image source={props.userImage} style={styles.userImage} />
                  </View>
                  <View style={styles.userName}>
                    <Text style={{fontWeight:'bold'}}>{item.Name}</Text>
                    <Text >{item.City} - {item.Country}</Text>
                  </View>
                  <View style={{borderWidth:1, borderColor:'red', borderRadius:10, alignItems:'center', width:'20%', 
                                backgroundColor:'#fff', justifyContent:'center'}}>
                    <Text style={{fontSize:20}}>{item.BloodType}</Text>
                  </View>
                </View>
            ))}
     </View>
);

const styles = StyleSheet.create({

    listContainer: {
      flex:1,
      padding:10,
      paddingTop:10,
      backgroundColor: '#fff',
      alignItems:'flex-start',
      flexDirection:'row',
      justifyContent:'space-between',
      width:'100%',
    },
    listItem:{
      flexDirection:'row',
      width:'100%',
      backgroundColor:'#fff',
      marginTop:5,
      padding:5,
      borderWidth:1,
      borderColor:'#eee',
    },
    userName:{
      width:'55%',
      fontWeight:'bold',
      justifyContent:'center',
      marginLeft:10
    },
    userImage:{
      width:60,
      height:60,
      padding:5,
      marginRight:10
    }
  });

  export default ListItem;