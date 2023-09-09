import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import questions from '../data/questions'
import { useNavigation, useRoute } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebaseConfig';


const QuizScreen = () => {
    const navigation = useNavigation()
  const route=useRoute()
 
   
  const [quizInfo, setquizInfo] = useState({})
    // points
    const [points, setPoints] = useState(0);

    const [data, setData] = useState([])

    // index of the question
    const [index, setIndex] = useState(0);

    // answer Status (true or false)
    const [answerStatus, setAnswerStatus] = useState(null);

    // answers
    const [answers, setAnswers] = useState([]);

    // selected answer
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    // Counter
    const [counter, setCounter] = useState(null);

    let interval = null

    const fetch = async () => {
        try {
          const querySnapshot = await getDocs(collection(db, route?.params?.quizName));
          const newData = [];
          let quizInfoData = null;
    
          querySnapshot.forEach((doc) => {
            if (doc.id === 'info') {
              quizInfoData = doc.data();
            } else {
              newData.push(doc.data());
            }
          });
    
          setData(newData);
    
          // Now that we have quizInfoData, update the counter
          if (quizInfoData) {
            setquizInfo(quizInfoData);
            setCounter(quizInfoData.timer);
       
          }
        } catch (error) {
          // Handle any potential errors here
          console.error("Error fetching data:", error);
        }
      }
    
      useEffect(() => {
        fetch();
      }, []); // Empty dependency array to run the effect only once

     
      const totalQuestions = data && data?.length;

    useEffect(() => {

        // console.log(selectedAnswerIndex,currentQuestion?.correctAnswerIndex,selectedAnswerIndex === currentQuestion?.correctAnswerIndex)
        if (selectedAnswerIndex !== null) {
            if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
                setPoints((points) => points + parseInt(quizInfo?.grading));
                setAnswerStatus(true);
                answers.push({ question: index + 1, answer: true });
            } else {
                setAnswerStatus(false);
                answers.push({ question: index + 1, answer: false });
            }
        }
    }, [selectedAnswerIndex]);

    useEffect(() => {
        setSelectedAnswerIndex(null);
        setAnswerStatus(null);
    }, [index]);

    useEffect(() => {
        const myInterval = () => {
            if (counter >= 1) {
                setCounter((state) => state - 1);
            }
            if (counter === 0) {
                setIndex((index + 1));
                setCounter(quizInfo?.timer);
            }
        };

        interval = setTimeout(myInterval, 1000);

        // clean up
        return () => {
            clearTimeout(interval);
        };
    }, [counter]);

      useEffect(() => {
     
        if (index+1 > 5) {
          clearTimeout(interval)
          navigation.navigate("Results", {
            answers: answers,
            points: points,
          });
        }
      }, [index]);

    useEffect(() => {
        if (!interval) {
            setCounter(quizInfo?.timer);
        }
    }, [index]);
    
    const currentQuestion =data && data[index]
     // progress bar
  const progressPercentage = Math.floor((index/totalQuestions) * 100);

    return (
        <View style={{ marginTop: 15 }}>

            <View style={styles.topBar}>
                <Text>Quiz Challenge</Text>
                <Pressable style={styles.timer}>
                <Text style={{ color: "white", textAlign: "center", fontWeight: "bold",fontSize:15 }}>{counter}</Text>
                </Pressable>
            </View>
            <View style={styles.topBar}>
                <Text>Your progress</Text>
                <Text>({index}/{totalQuestions}) question answered</Text>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressBar}>
                <Text style={[styles.progressText, {width: `${progressPercentage}%`}]}/>
            </View>

            <View style={styles.questionCard}>
                <Text style={styles.question}>{  currentQuestion?.question}</Text>
                <View style={{ marginTop: 12 }}>
                    {
                        currentQuestion?.options?.map((item, index) =>
                            <Pressable onPress={() => selectedAnswerIndex === null && setSelectedAnswerIndex(index)} key={index} style={selectedAnswerIndex === index &&
                                index === currentQuestion.correctAnswerIndex
                                ? styles.success : selectedAnswerIndex != null && selectedAnswerIndex === index ? styles.fail : styles.answerCard}>

                                {selectedAnswerIndex === index &&
                                    index === currentQuestion.correctAnswerIndex ? (
                                    <AntDesign
                                        style={styles.icon}
                                        name="check"
                                        size={20}
                                        color="white"
                                    />
                                ) : selectedAnswerIndex != null &&
                                    selectedAnswerIndex === index ? (
                                    <AntDesign
                                        style={styles.icon}
                                        name="closecircle"
                                        size={20}
                                        color="white"
                                    />
                                ) : (
                                    <Text
                                        style={styles.answerOption}  >
                                        {item.options}
                                    </Text>
                                )}
                                <Text style={{ marginLeft: 10 }}>{item.answer}</Text>

                            </Pressable>)
                    }
                </View>
            </View>

        </View>
    )
}

export default QuizScreen

const styles = StyleSheet.create({
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10,
    },
    questionCard: {
        marginTop: 30,
        backgroundColor: "#F0F8FF",
        padding: 10,
        borderRadius: 6,
    },
    question: {
        fontSize: 18,
        fontWeight: "bold"
    },
    answerCard: {
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: 10,
        borderWidth: 0.5,
        borderColor: "#00FFFF",
        borderRadius: 20
    },
    answerOption: {
        borderColor: "#00FFFF",
        textAlign: "center",
        borderWidth: 0.5,
        width: 40,
        height: 40,
        borderRadius: 20,
        padding: 10,
    },
    success: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "#00FFFF",
        marginVertical: 10,
        backgroundColor: "green",
        borderRadius: 20,
    },
    fail: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        borderColor: "#00FFFF",
        marginVertical: 10,
        backgroundColor: "red",
        borderRadius: 20,
    },
    icon: {
        borderColor: "#00FFFF",
        textAlign: "center",
        borderWidth: 0.5,
        width: 40,
        height: 40,
        padding: 10,
        borderRadius: 20,
    },
    timer:{
        padding:10,
        backgroundColor:'magenta',
        marginTop:5,
        borderRadius:20,
        width:40,
        aspectRatio:1
    },
    progressBar:{
        backgroundColor: "white",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        height: 10,
        borderRadius: 20,
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 10,
    },
    progressText:{
        backgroundColor: "#FFC0CB",
        borderRadius: 12,
        position: "absolute",
        left: 0,
        height: 10,
        right: 0,
        marginTop: 20,
    }
})