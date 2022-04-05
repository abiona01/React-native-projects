import { StyleSheet, Text, View } from "react-native";

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>One</Text>
            <Text style={styles.boxTwo}>Two</Text>
            <Text style={styles.boxThree}>Three</Text>
            <Text style={styles.boxFour}>Four</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        backgroundColor: "#ddd",
      
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
    },
    boxOne: {
        backgroundColor: "violet",
        padding: 10,
        flex: 1,
    },
    boxTwo: {
        backgroundColor: "indigo",
        padding: 20,
        flex: 1,
    },
    boxThree: {
        backgroundColor: "blue",
        padding: 30,
        flex: 2,
    },
    boxFour: {
        backgroundColor: "green",
        padding: 40,
        flex: 1,
    },
});