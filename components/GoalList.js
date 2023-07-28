import { View, FlatList, Text, StyleSheet } from "react-native";
import GoalItem from "./GoalItem";

const GoalList = props => {
  return ( 
    <View style={styles.goalsContainer}>
      <FlatList 
        data={props.allGoals}
        
        renderItem={({item}) => {
          return (
            <GoalItem goal={item} deleteGoal={props.deleteGoal} />
          );
        }} 

        keyExtractor={goal => goal.id}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  goalsContainer: {
    flex: 8,
    marginTop: 20,
    marginHorizontal: 10
  }
});

export default GoalList;