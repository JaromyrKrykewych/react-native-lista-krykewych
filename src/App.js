import { StyleSheet, View } from "react-native";

import AddTaskButton from "./components/AddTaskButton/AddTaskButton";
import AddTaskModal from "./components/AddTaskModal/AddTaskModal";
import TaskList from "./components/TaskList/TaskList";
import TaskModal from "./components/TaskModal/TaskModal";
import { useState } from "react";

const App = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });
  const [tasks, setTasks] = useState([]);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const onHandlerChange = (name, value) => {
    setTask({ ...task, [name]: value });
  };

  const onHandlerTaskModal = (task) => {
    setIsTaskModalVisible(true);
    setSelectedTask(task);
  };

  const onRequestCloseModal = () => {
    setSelectedTask(null);
    setIsTaskModalVisible(!isTaskModalVisible);
  };
  const onHandlerDelete = () => {
    setTasks((prevTaskList) =>
      prevTaskList.filter((task) => task.id !== selectedTask.id)
    );
    setIsTaskModalVisible(!isTaskModalVisible);
  };
  const onHandlerTask = () => {
    setTasks((prevTaskList) =>
      prevTaskList.map((task) =>
        task.id === selectedTask.id ? { ...task, ["done"]: true } : task
      )
    );
    setSelectedTask(null);
    setIsTaskModalVisible(!isTaskModalVisible);
  };
  const onAddingHandler = () => {
    setTasks([...tasks, { ...task, id: Math.random().toString() }]);
    setIsAddModalVisible(!isAddModalVisible);
  };
  return (
    <View style={styles.container}>
      <AddTaskButton
        setIsAddModalVisible={setIsAddModalVisible}
        isAddModalVisible={isAddModalVisible}
      />
      <TaskList tasks={tasks} onHandlerTaskModal={onHandlerTaskModal} />
      <AddTaskModal
        isAddModalVisible={isAddModalVisible}
        setIsAddModalVisible={setIsAddModalVisible}
        task={task}
        onHandlerChange={onHandlerChange}
        onAddingHandler={onAddingHandler}
      />
      <TaskModal
        isTaskModalVisible={isTaskModalVisible}
        setIsTaskModalVisible={setIsTaskModalVisible}
        onRequestCloseModal={onRequestCloseModal}
        onHandlerDelete={onHandlerDelete}
        onHandlerTask={onHandlerTask}
        task={selectedTask}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default App;
