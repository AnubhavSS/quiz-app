import { StyleSheet, Text, View,Image,FlatList,Pressable } from 'react-native'
import React from 'react'
import { Rules } from '../constant'
import { useNavigation } from '@react-navigation/native'


const HomeScreen = () => {
    const navigation=useNavigation()
  return (
    <View style={{marginTop:15}}>
     <Image style={{height:370,width:'100%',resizeMode:'contain'}}
     source={{uri:"https://t3.ftcdn.net/jpg/03/45/97/36/360_F_345973621_sMifpCogXNoIDjmXlbLwx1QZA5ZmQVl8.jpg"}}/>
    <View style={{padding:10}}>
        <Text style={styles.quizHeading}>QUIZ RULES</Text>
    </View>
    <FlatList
  data={Rules}
  renderItem={({ item}) => (
    <View style={styles.quizCard}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'white' }}>.</Text>
        <Text style={styles.quizText}>{item}</Text>
      </View>
    </View>
  )}
  keyExtractor={(item) => item}
/>

<Pressable style={styles.quizStartBtn} onPress={()=>navigation.navigate('Quiz')}>
    <Text style={styles.quizStartBtnText}>Start Quiz</Text>
</Pressable>

<Pressable style={styles.quizStartBtn} onPress={()=>navigation.navigate('Create')}>
    <Text style={styles.quizStartBtnText}>Create Quiz</Text>
</Pressable>
    
    
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    quizHeading:{
        textAlign:'center',
        color:'magenta',
        fontSize:20,
        fontWeight:'600'
    },
    quizCard:{
        padding:10,
        backgroundColor:'#FAB161',
        borderRadius:6,
        marginTop:15,
        marginHorizontal:10
    },
    quizText:{
        marginLeft:4,
        color:'gray',
        fontSize:15,
        fontWeight:'500'
    },
    quizStartBtn:{
        backgroundColor: "magenta",
          padding: 14,
          width:120,
          borderRadius: 25,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
    },
    quizStartBtnText:{
        color:"white",
        fontWeight:"600",
        textAlign:"center",
        fontSize:20
    }
})