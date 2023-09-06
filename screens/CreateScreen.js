import { View, TextInput, Button, Text, StyleSheet,Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import React from 'react'


const CreateScreen = () => {

    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
    Alert.alert(data)
      // Here you can perform further actions with the form data, like sending it to a server
    };
  
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Forms</Text>

<View style={{marginVertical:5}}>
    <Text style={styles.label}>Quiz Name</Text>
    <Controller
      control={control}
      name="quizName"
    //  rules={{required:true}}
      render={({ field }) => (
        <TextInput
          {...field}
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
     // rules={{required:true}}
      render={({ field }) => (
        <TextInput
          {...field}
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
     // rules={{required:true}}
      render={({ field }) => (
        <TextInput
          {...field}
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