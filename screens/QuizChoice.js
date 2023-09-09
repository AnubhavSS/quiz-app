import { Pressable, StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useEffect,useState} from 'react'
import { useNavigation } from '@react-navigation/native'

import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';

const QuizChoice = () => {

  const [data, setData] = useState([])
  const fetch = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "QuizNames"));
      const newData = [];
      querySnapshot.forEach((doc) => {
          newData.push(doc.data());
      });

      setData(newData);

    } catch (error) {
      // Handle any potential errors here
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetch();
  }, []); // Empty dependency array to run the effect only once

  const navigation=useNavigation()

  return (
    <View style={styles.container}>
      {console.log(data)}
      <Text style={styles.quizHeading}>QuizChoice</Text>
      
      <View style={{margin:5,padding:5}}>
      <FlatList
  data={data}
  contentContainerStyle={{flexDirection : "row", flexWrap : "wrap"}} 
  keyExtractor={(item, index) => index.toString()}
  renderItem={({ item }) => (
    <Pressable style={styles.card} onPress={() => navigation.navigate('Quiz',{quizName:Object.keys(item)[0]})}>
      <Text numberOfLines={3} ellipsizeMode='tail' style={styles.quizName}>
        {Object.keys(item)[0]}
      </Text>
    </Pressable>
  )}
/></View>
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
  margin:10
},
quizName:{
  fontSize:30,
  fontWeight:'500',
  textAlign:'center',
  justifyContent:'center',
  alignItems:'center',
  
  
}
})