import { View, TextInput, Button, Text, StyleSheet,Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { collection,setDoc,doc,addDoc} from "firebase/firestore"; 
import { db } from '../firebaseConfig';

const CreateScreen = () => {
const navigation=useNavigation()
    const { control, handleSubmit } = useForm();

    const onSubmit = async (data) => {
      try {
        // Use 'collection' for the quizName and 'doc' for 'info' within that collection
        const docRef = doc(collection(db, data?.quizName), 'info');
        await setDoc(docRef, data);

        const docss=addDoc(collection(db,"QuizNames"),{
         [ data?.quizName]: data?.quizName
        })
        navigation.navigate('AddQues', { data });
      } catch (error) {
        console.error('Error creating document:', error);
      }
    };
  
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Forms</Text>

<View style={{marginVertical:5}}>
    <Text style={styles.label}>Quiz Name</Text>
    <Controller
      control={control}
      name="quizName"
     rules={{required:true}}
      render={({ field: { onChange,value }}) => (
        <TextInput
          value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder="Enter Quiz Name"
          // Add other TextInput props as needed
        />
      )}
    />
</View>


<View style={{marginVertical:5}}>
    <Text style={styles.label}>Timer</Text>
    <Controller
      control={control}
      name="timer"
      rules={{required:true}}
      render={({ field: { onChange,value }}) => (
        <TextInput
        value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder="Enter timer duration"
          
          // Add other TextInput props as needed
        />
      )}
    />
</View>


<View style={{marginVertical:5}}>
    <Text style={styles.label}>Grading</Text>
    <Controller
      control={control}
      name="grading"
      rules={{required:true}}
      render={({ field: { onChange,value } }) => (
        <TextInput
        value={value}
        onChangeText={onChange}
          style={styles.input}
          placeholder="Enter points for correct answer"
          // Add other TextInput props as needed
        />
      )}
    />
</View>

    <Button title="Next" onPress={handleSubmit(onSubmit)} />
  </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
     margin:15,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 20,
      width: '90%',
    },
    label:{
        fontSize:20,
        fontWeight:'500',
        marginBottom:5
    }
  });