import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import GoalItem from '@/components/GoalItem';
import GoalInput from '@/components/GoalInput';



export default function HomeScreen() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startModalButtonHandler() {
    setModalIsVisible(true)
  }

  function endModalButtonHandler() {
    setModalIsVisible(false)
  }

  function getRandomId(min, max) {
    return (
      Math.floor(Math.random() * (min - max + 1)) + min)
  }

  function addButtonHandler(enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, id: getRandomId(1000, 9999).toString() }
    ])
    endModalButtonHandler()
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>

      <View style={styles.listContainer}>
        <FlatList
          data={courseGoals}
          alwaysBounceHorizontal={false}
          keyExtractor={(item, index) => {
            console.log(index)
            return item.id;
          }}
          renderItem={(itemData) => {
            return <GoalItem
              id={itemData.item.id}
              data={itemData.item}
              onDeleteItem={deleteGoalHandler} />
          }}
        />
      </View>

      <Button title='Add new goal'
        color={'#9282EC'}
        onPress={startModalButtonHandler} />
      <GoalInput showModal={modalIsVisible} onAddGoal={addButtonHandler} onCancel={endModalButtonHandler} />

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingHorizontal: 16,
    paddingTop: 64,
    paddingBottom: 16,
    flex: 1
  },
  listContainer: {
    paddingTop: 16,
    flex: 5,
    justifyContent: 'flex-start',

  }
});
