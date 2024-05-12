import { StyleSheet, View, FlatList } from 'react-native';
import { useState } from 'react';
import GoalItem from '@/components/GoalItem';
import GoalInput from '@/components/GoalInput';



export default function HomeScreen() {
  const [courseGoals, setCourseGoals] = useState([]);

  function getRandomId (min, max) {
    return(
      Math.floor(Math.random() * (min - max +1)) + min)
  }

  function addButtonHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals, 
      {text: enteredGoalText, id: getRandomId(1000, 9999).toString() }
    ])
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={addButtonHandler}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          alwaysBounceHorizontal={false}
          keyExtractor={(item, index) => {
            console.log(index)
            return item.id;
          } }
          renderItem={(itemData) => {
            return <GoalItem 
            id={itemData.item.id}
            data={itemData.item} 
            onDeleteItem={deleteGoalHandler} />
          }}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    paddingTop: 50,
    flex: 1
  },
  listContainer: {
    paddingTop: 16,
    flex: 5,
    justifyContent: 'flex-start',

  }
});
