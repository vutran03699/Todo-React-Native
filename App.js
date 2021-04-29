import React,{useState} from 'react';
import { KeyboardAvoidingView,TouchableOpacity, Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask ] = useState();
  const [taskIteams,setTaskIteams] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
  return (
    <View style={styles.container}>
      {/* Today task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTile}>Today's Task</Text>
        <View style={styles.items}>
          {/* this is where the task will go */}
          <Task text={'Task 1'}/>
          <Task text={'Task 2'}/>
          <Task text={'Task 3'}/>
        </View>
      </View>
      {/* Wire a task */}
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.writeTaskWrapper} 
      > 
      <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText= {text => setTask(test)} />

        <TouchableOpacity onPress={() =>handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      

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
  },
  writeTaskWrapper:{
    position: 'absolute',
    bottom: 60,
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',



  },
  input:{
    paddingVertical: 15,
    paddingHorizontal:15,
    backgroundColor:'#FFFFFF',
    borderRadius:60,
    borderWidth:1, 
    width:250,


  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1, 


  },
  addText:{

  },
});
