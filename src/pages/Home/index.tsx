import React from 'react';
import { Text, TextInput, View, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { TaskList } from '../../components/TaskList';
import { useTaskList } from '../../context/TasksContext';

export const Home = () => {
    const [newTask, setNewTask] = React.useState('');
    const { addTask } = useTaskList();

    const handleAddNewTask = () => {
        const data = {
            id: String(new Date().getTime()),
            title: newTask ? newTask : 'Task empty'
        };

        addTask(data)
    }

    return (
        <SafeAreaView style={styles.SafeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>Olá Dev!</Text>
                <TextInput style={styles.input} placeholder="Nova tarefa..." placeholderTextColor={'#555'} onChangeText={setNewTask}></TextInput>
                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleAddNewTask}>
                    <Text style={styles.buttonText}>Adicionar</Text>
                </TouchableOpacity>

                <Text style={styles.titleTasks}>Minhas Tarefas</Text>

                <TaskList />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: '#121214',
    },
    container: {
        flex: 1,
        backgroundColor: '#121214',
        marginTop: StatusBar.currentHeight,
        padding: 20
    },
    title: {
        color: '#f1f1f1',
        fontSize: 24,
        fontWeight: 'bold'
    },
    titleTasks: {
        color: '#f1f1f1',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 50
    },
    input: {
        backgroundColor: '#29292e',
        color: '#f1f1f1',
        fontSize: 18,
        padding: 15,
        marginTop: 30,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#eba417',
        padding: 15,
        borderRadius: 7,
        alignItems: 'center',
        marginTop: 20
    },
    buttonText: {
        color: '#121214',
        fontSize: 18,
        fontWeight: 'bold'
    },
    buttonTask: {
        backgroundColor: '#29292e',
        padding: 10,
        marginTop: 10,
        borderRadius: 50,
        alignItems: 'center'
    },
    titleTask: {
        color: '#f1f1f1',
        fontSize: 20,
        fontWeight: 'bold'
    }
});
