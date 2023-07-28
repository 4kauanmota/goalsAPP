import { useState } from 'react';
import { StyleSheet, View, Pressable, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [allGoals, setAllGoals] = useState([]);
  const [inputModal, setInputModal] = useState(false);

  const modelGoalInputHandler = () => {
    setInputModal(!inputModal);
  }

  const addGoalHandler = (newGoal) => {
    setAllGoals((prev) => prev.concat({text: newGoal, id: Math.random().toString()}));
  }

  const deleteGoal = (id, name) => {
    setAllGoals(allGoals.filter(el => el.id != id))
    console.log(name);
  }

  return (
    <>
      <StatusBar style='light'/>
      <View style={styles.container}>
        <Pressable onPress={modelGoalInputHandler} style={styles.addNewGoalButton}>
          <Text style={styles.addNewGoalButtonText}> ADD NEW GOAL </Text>
        </Pressable>
        
        <GoalInput addGoalHandler={addGoalHandler} inputModal={inputModal} modelGoalInputHandler={modelGoalInputHandler} />
  
        <GoalList allGoals={allGoals} deleteGoal={deleteGoal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 25,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#202124',
  },

  addNewGoalButton: {
    backgroundColor: '#1e90ff',
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }, 

  addNewGoalButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  }
});