import { TextInput, View, Button, StyleSheet } from "react-native"
import { useState } from "react";

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    function addInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText)
    };

    function addButtonHandler () {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={addInputHandler}
                style={styles.textInput}
                placeholder='Add your goal'
                value={enteredGoalText}>
            </TextInput>

            <Button
                onPress={addButtonHandler}
                color="#484554"
                title='Add goal' />
        </View>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#7469B6',

    },
    textInput: {
        width: '75%',
        borderWidth: 1,
        borderColor: '#7469B6',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
    },
})


export default GoalInput