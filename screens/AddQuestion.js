import { StyleSheet, Text, View ,TextInput,Pressable} from 'react-native'
import React,{useState} from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form';

const AddQuestion = () => {
    const route=useRoute()
    const navigation=useNavigation()
    const [questionNo, setquestionNo] = useState(1)
    const { control, handleSubmit,reset } = useForm({ defaultValues: {
        [`question${questionNo}`]: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctAnswer: '',
      }});

    const onSubmit = (data) => {
      let quizData=[]
         reset()
    setquestionNo(prev=>prev+1)
   
    const { [ `question${questionNo}` ]: questionValue,correctAnswer,option1,option2,option3,option4 } = data;
    const values={
      grading:route?.params?.data?.grading,
      quizName:route?.params?.data?.quizName,
      timer:route?.params?.data?.timer,
      question:questionValue,
      correctAnswer:correctAnswer-1,
      options:[
        {
        id:0,
        option:"A",
        answer:option1
      },
      {
        id:1,
        option:"B",
        answer:option2
      },
      {
        id:2,
        option:"C",
        answer:option3
      },
      {
        id:3,
        option:"D",
        answer:option4
      },
    ]
    }

if(questionNo>5)
{

}
else
{
  quizData.push(values)
}
    
    };
    // console.log(route.params)

    
  return (
    <View style={{ margin: 25 }}>
      <Text style={styles.title}>Forms</Text>

<View style={{marginVertical:5}}>
    <Text style={styles.label}>{`Question ${questionNo}`}</Text>
    <Controller
      control={control}
      numberOfLines={4}
      editable
      name={`question${questionNo}`}
     rules={{required:true}}
      render={({ field: { onChange,value }}) => (
        <TextInput
        multiline
          value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder="Enter question"
          // Add other TextInput props as needed
        />
      )}
    />
</View>


<View style={{marginVertical:5}}>
    <Text style={styles.label}>Option 1</Text>
    <Controller
      control={control}
      name="option1"
      rules={{required:true}}
      render={({ field: { onChange,value }}) => (
        <TextInput
        value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder="Enter option1"
          
          // Add other TextInput props as needed
        />
      )}
    />
</View>


<View style={{marginVertical:5}}>
    <Text style={styles.label}>Option 2</Text>
    <Controller
      control={control}
      name="option2"
      rules={{required:true}}
      render={({ field: { onChange,value }}) => (
        <TextInput
        value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder="Enter option2"
          
          // Add other TextInput props as needed
        />
      )}
    />
</View>

<View style={{marginVertical:5}}>
    <Text style={styles.label}>Option 3</Text>
    <Controller
      control={control}
      name="option3"
      rules={{required:true}}
      render={({ field: { onChange,value }}) => (
        <TextInput
        value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder="Enter option3"
          
          // Add other TextInput props as needed
        />
      )}
    />
</View>

<View style={{marginVertical:5}}>
    <Text style={styles.label}>Option 4</Text>
    <Controller
      control={control}
      name="option4"
      rules={{required:true}}
      render={({ field: { onChange,value }}) => (
        <TextInput
        value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder="Enter option4"
          
          // Add other TextInput props as needed
        />
      )}
    />
</View>

<View style={{marginVertical:5}}>
    <Text style={styles.label}>Correct Answer</Text>
    <Controller
      control={control}
      name="correctAnswer"
      rules={{required:true}}
      render={({ field: { onChange,value }}) => (
        <TextInput
        value={value}
          onChangeText={onChange}
          style={styles.input}
          placeholder="Enter correct option number ex:1,2.."
          
          // Add other TextInput props as needed
        />
      )}
    />
</View>

<Pressable
  style={styles.button}
  onPress={questionNo> 5 ? navigation.navigate('Home') : handleSubmit(onSubmit)}
>
  <Text style={styles.text}>{questionNo === 5 ? "Submit" : "Next"}</Text>
</Pressable>

    </View>
  )
}

export default AddQuestion

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
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
       padding:10,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
        width:100,
      },
      text: {
        fontSize: 20,
        lineHeight: 21,
        fontWeight: '500',
        letterSpacing: 0.25,
        color: 'white',
      },
  });