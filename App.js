import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,  FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Learn React Native", key: "1" },
    { text: "Learn React", key: "2" },
    { text: "Learn Redux", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    
  };

  return (
    <View style={styles.container}>
{/* header */}
<Header />
<View style={styles.content}>
  <AddTodo submitHandler={submitHandler} />
  <View style={styles.list}>
<FlatList 
data={todos}
renderItem={({item}) => (
 <TodoItem item={item} pressHandler={pressHandler} />
)}
/>
    </View>
</View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
 content: {
   padding: 40,
 },
 list: {
    marginTop: 20,
 }
});
