import { View, Text, StyleSheet, Pressable } from 'react-native'

function GoalItem(props) {
    return (

        <View style={styles.goalItemWrap}>
            <Pressable
                android_ripple={{ color: '#9282EC' }}
                style={({ pressed }) => pressed && styles.pressedItem}
                onPress={props.onDeleteItem.bind(this, props.id)}>
                <Text style={styles.goalItem}>{props.data.text}</Text>
            </Pressable>
        </View>

    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        padding: 16,
    },
    goalItemWrap: {
        borderRadius: 4,
        backgroundColor: '#C9BAFF',
        marginBottom: 8
    },
    pressedItem: {
        backgroundColor: '#9282EC',
        borderRadius: 4
    }
})