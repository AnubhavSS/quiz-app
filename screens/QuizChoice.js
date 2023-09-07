import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const QuizChoice = () => {

  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.quizHeading}>QuizChoice</Text>

<Pressable style={styles.card} onPress={()=>navigation.navigate('Quiz')}>
  <Text numberOfLines={3} ellipsizeMode='tail' style={styles.quizName}>Quiz 1</Text>
</Pressable>

    </View>
  )
}

export default QuizChoice

const styles = StyleSheet.create({
  container: {
    flex: 1,
   margin:15,
    padding: 20,
    
  },
  quizHeading:{
    textAlign:'center',
    color:'magenta',
    fontSize:20,
    fontWeight:'600'
},
card:{
  width:100,
  aspectRatio:1,
  borderWidth:1,
  borderColor:"gray",
  borderRadius:10,
  justifyContent:'center',
  alignItems:'center',
},
quizName:{
  fontSize:30,
  fontWeight:'500',
  textAlign:'center',
  justifyContent:'center',
  alignItems:'center',
  
  
}
})