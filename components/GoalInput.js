import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Modal, Image, Pressable } from "react-native";

const GoalInput = props => {
  const [newGoal, setNewGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setNewGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.addGoalHandler(newGoal);
    setNewGoal('');
    props.modelGoalInputHandler();
  }

  const reset = () => {
    setNewGoal('');
    props.modelGoalInputHandler();
  }

  return (
    <Modal visible={props.inputModal} animationType="fade">
      <View style={styles.newGoalContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.goalImage} source={require('../assets/img/goal.png')} />
        </View>

        <View style={styles.newGoalInputArea}>
          <TextInput  placeholder='Goal...' style={styles.newGoalInput} placeholderTextColor='#fff' onChangeText={goalInputHandler} value={newGoal} />

          <Pressable onPress={addGoalHandler} style={styles.addButton}>
            <Text style={styles.addButtonText}> ADD </Text>
          </Pressable>
        </View>

        <Pressable onPress={reset} style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}> CANCEL </Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  newGoalContainer: {
    flex: 1,
    backgroundColor: '#202124',
    flexDirection: 'column'
  },

  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 20
  },

  goalImage: {
    width: 150,
    height: 150,
  },

  newGoalInputArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomColor: '#ccc',
    marginHorizontal: 20
  },

  newGoalInput: {
    flex: 7,
    height: 55,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    color: '#fff',
    borderRadius: 8,
  },
  
  addButton: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    backgroundColor: '#1e90ff',
    borderRadius: 8,
  },

  addButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: "bold"
  },

  cancelButton: {
    backgroundColor: '#1e90ff',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },

  cancelButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: "bold"
  }
});

export default GoalInput;