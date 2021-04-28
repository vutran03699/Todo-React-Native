import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Today task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTile}>Today's Task</Text>
        <View style={styles.items}>
          {/* this is where the task will go */}
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>

         

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAEA',
  },
  taskWrapper:{
    paddingTop:80,
    paddingHorizontal:20,
  },
  sectionTile: {
    fontSize:34,
    fontWeight:'bold',

  },
  items:{
    marginTop:30,
  }
});
