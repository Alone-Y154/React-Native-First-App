import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

interface Item {
    id: string;
    text: string;
    completed: boolean;
    toBeCompletedBy: string;
}

interface ListProps {
    item: Item;
    toggleTask: (id: string) => void;
    deleteTask: (id: string) => void;
    styles: any;
}

const List: React.FC<ListProps> = ({ item, toggleTask, deleteTask, styles }) => (
    <View style={styles.taskItem}>
        <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.taskTextContainer}>
            <Text style={[styles.taskText, item.completed && styles.completedTask]}>
                {item.text}
            </Text>
            <Text style={[styles.taskText, item.completed && styles.completedTask]}>
               Complete on or before :  {item.toBeCompletedBy}
            </Text>
        </TouchableOpacity>
        <Button title="❌" onPress={() => deleteTask(item.id)} color="white" />
    </View>
);

export default List;