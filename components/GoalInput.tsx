import { TextInput, View, Button, StyleSheet, Modal, Image } from "react-native"
import { useState } from "react";

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('');
    function addInputHandler(enteredText: string) {
        setEnteredGoalText(enteredText)
    };

    function addButtonHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <Modal visible={props.showModal} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/target.png')} />
                <TextInput
                    onChangeText={addInputHandler}
                    style={styles.textInput}
                    placeholder='Add your goal'
                    value={enteredGoalText}>
                </TextInput>

                <View style={styles.buttonWrap}>
                    <Button
                        onPress={addButtonHandler}
                        color="#484554"
                        title='Add goal' />
                    <Button onPress={props.onCancel} title="Cancel" />
                </View>

            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    inputContainer: {
        gap: 8,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 16

    },
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#7469B6',
        paddingHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
    },
    buttonWrap: {
        flexDirection: 'row',
        gap: 16,
        marginTop: 16
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})


export default GoalInput