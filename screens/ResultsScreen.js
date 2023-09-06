import { StyleSheet, Text, View , Pressable,
    FlatList,} from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from "@expo/vector-icons";
const ResultsScreen = () => {
const navigation=useNavigation()
    const route=useRoute()
   
  return (
    <View style={{ marginTop: 15 }}>
    <View
      style={styles.topbar}
    >
      <Text style={styles.textStyle}>Your Results</Text>
    </View>

    <View
      style={styles.questionAns}>
      <Text style={styles.textStyle}>Questions Answered</Text>
      <Text style={styles.textStyle}>(5/5)</Text>
    </View>

    <Pressable
      style={
       styles.scoreCard
      }
    >
      <Text
        style={styles.scoreCardText}
      >
        Score Card ({route.params?.points})
      </Text>
      <FlatList
        numColumns={2}
        data={route.params?.answers}
        renderItem={({ item, i }) => (
          <View
            style={styles.results}
          >
            <Text>{item.question}</Text>
            {item.answer === true ? (
              <AntDesign style={{marginLeft:5}} name="checkcircle" size={20} color="green" />
            ) : (
              <AntDesign style={{marginLeft:5}} name="closecircle" size={20} color="red" />
            )}
          </View>
        )}
      />

      <Pressable style={styles.continue} onPress={()=>navigation.navigate('Home')}>
        <Text style={{color:"white",textAlign:"center"}}>Continue</Text>
      </Pressable>
    </Pressable>
  </View>
  )
}

export default ResultsScreen

const styles = StyleSheet.create({
    topbar:{
        flexDirection: "row",
        alignItems: "center",
        margin: 15 ,
        justifyContent: "space-between",
        fontSize:20,
        fontWeight:'500'
    },
    questionAns:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
    },
    scoreCard:{
        backgroundColor: "white",
        height: 220,
        borderRadius: 7,
        marginTop: 20,
    },
    scoreCardText:{
        color: "magenta",
          fontSize: 25,
          fontWeight: "500",
          textAlign: "center",
          marginTop: 8,
          fontStyle:'italic'
    },
    results:{
        alignItems: "center",
              justifyContent: "center",
              margin: 10,
              flexDirection: "row",
              alignItems: "center",
              marginLeft:"auto",
              marginRight:"auto"
    },
    continue:{
        backgroundColor:"green",
        padding:8,
        marginLeft:"auto",
        marginRight:"auto",
        marginBottom:20,
        borderRadius:5
    },
    textStyle:{
        fontSize:20,
        fontWeight:'500'
    }
})