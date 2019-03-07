import React from 'react';
import {Modal,  View, Image, Text, Button} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Hospital_icon from '../../../assets/hospital_icon.png';
import Date_icon from '../../../assets/date_icon.jpg';
import Phonecall_icon from '../../../assets/phonecall_icon.png';
import Sms_icon  from '../../../assets/sms_icon.png';

const UserDetails = (props) => {
    let content = null;
    let Hospitals = null;
    if(props.selectedUser){
        content = (
            <View>
                <View style={{flexDirection:'row', width:'100%', marginTop:0, padding:20, 
                             backgroundColor:'#045079'}}>
                    <View style={{width:'40%', padding:5, flexDirection:'row', justifyContent:'space-between'}}>
                        <Button title='Back' onPress={props.onClosed} />
                    </View>
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white', fontWeight:'bold'}}>BloodDonor+</Text>
                    </View>
                </View>
                <View style={{width:'100%',alignItems:'center', margin:10}}>
                    <Image source={props.userImage} style={{width:200, height:200}}/>
                </View>
                <View style={{flexDirection:'row', backgroundColor:'#eee', padding:5}}>
                    <View style={{width:'70%', backgroundColor:'#eee', padding:10}}>
                        <Text style={{fontSize:20, fontWeight:'bold'}}>{props.selectedUser.Name}</Text>
                        <Text>{props.selectedUser.City} - {props.selectedUser.Country}</Text> 
                    </View>
                    <View style={{borderRadius:20, alignItems:'center', width:'20%', 
                                backgroundColor:'#ddd', justifyContent:'center'}}>
                    <Text style={{fontSize:20}}>{props.selectedUser.BloodType}</Text>
                  </View>
                </View>
            </View>
        )

        Hospitals = ( 
            <View style={{width:'100%', marginBottom:5, backgroundColor:'#ddd', 
            flexDirection:'column', justifyContent:'space-between'}}>
                {props.selectedUser.Hopitals.map((hospital, index) => (
                    <View key={index} style={{marginBottom:1, padding:5, paddingLeft:10, backgroundColor:'#fff'}}>
                        <View style={{flexDirection:'row', padding:5, alignItems:'center'}}>
                            <Image source={Hospital_icon} style={{width:40, height:40}}/>
                            <Text style={{fontSize:15, width:'40%', paddingLeft:10}}>Hospital</Text> 
                            <Text style={{fontSize:15}}>{hospital.Hospital}</Text>
                        </View>
                        <View style={{flexDirection:'row', padding:5, alignItems:'center'}}>
                            <Image source={Date_icon} style={{width:40, height:40}}/>
                            <Text style={{fontSize:15, width:'40%', paddingLeft:10}}>Date</Text>
                            <Text style={{fontSize:15}}>{hospital.Date}</Text>
                        </View>
                    </View>
                    ))}
            </View>
)   
    }
    return (
        <Modal visible={props.selectedUser !== null} onRequestClose={() => props.onClosed}
        animationType="slide">
        <ScrollView style={{width:'100%'}}>
            {content}
            <View style={{flexDirection:'row', width:'100%', paddingTop:5, paddingBottom:5}}>
                <View style={{width:'50%', justifyContent:'center', alignItems:'center'}} >
                    <Image source={Phonecall_icon} style={{width:40, height:40}}/>
                </View>
                <View style={{width:'50%', justifyContent:'center', alignItems:'center'}}>
                    <Image source={Sms_icon} style={{width:40, height:40}}/>
                </View>
            </View>
            <View style={{width:'100%', backgroundColor:'#eee', padding:10, paddingLeft:15}}>
                <Text style={{fontSize:18}}>Donotion History</Text>
            </View>
            {Hospitals}
            </ScrollView>
        </Modal>
    )
}

export default UserDetails;