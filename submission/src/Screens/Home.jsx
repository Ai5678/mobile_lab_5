import {Text, Button } from 'react-native'
import React, {useState} from 'react'
import ToDoList from '../Components/ToDoList';
import ToDoForm from '../Components/ToDoForm';
import MainLayout from '../layouts/MainLayout';

export default function Home({navigation}) {
  const [tasks, setTasks] = useState(['Do laundry', 'Go to gym', 'Walk dog']);

  const addTask=(taskText) => {
    setTasks([...tasks,taskText]);
    };

  return (
    <MainLayout>
        <Text>Home</Text>
        <ToDoList tasks={tasks}/>
        <ToDoForm addTask={addTask}/>
        <Button title="Go To About" onPress={() => navigation.navigate('About')}/>
    </MainLayout>
  )
}