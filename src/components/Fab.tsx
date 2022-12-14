import React, { useContext } from 'react'
import { StyleProp, TouchableOpacity, View, ViewStyle, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props{
    iconName:string,
    onPress:()=>void,
    style?:StyleProp<ViewStyle>,
}


export const Fab = ({iconName,onPress,style={}}:Props) => {
    
    return (
        <View style={{...style as any}}>
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={onPress}
                style={styles.blackButton}            
            >
                <Icon
                    style={{left:1}}
                    name ={iconName}
                    color="white"
                    size={30}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    blackButton:{
        zIndex:9999,
        height:50,
        width:50,
        backgroundColor:'#0a0d0f',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'white',
        shadowOffset:{
            width:0,
            height:3,
        },
        shadowOpacity:0.27,
        shadowRadius:4.65,
        elevation:5,
    }
});
