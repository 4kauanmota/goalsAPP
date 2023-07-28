import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  return (
    <View style={styles.goal}>
      <Pressable
        onPress={props.deleteGoal.bind(this, props.goal.id, props.goal.text)}
        style={({pressed}) => pressed && styles.goalPressed}
      >
        <Text style={styles.goalText}> {props.goal.text} </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goal: {
    backgroundColor: "#1e90ff99",
    borderRadius: 24,
    marginBottom: 24,
  },

  goalPressed: {
    backgroundColor: '#1e90ffff',
    borderRadius: 24
  },

  goalText: {
    textAlign: "center",
    textAlignVertical: "center",
    color: "#fff",
    padding: 15,
  },
});

export default GoalItem;
