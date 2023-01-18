import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./style";

const AddTaskButton = ({ isAddModalVisible ,setIsAddModalVisible}) => {
  return (
    <View style={styles.addTaskContainer}>
      <Text style={styles.labelText}>Add a new task</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setIsAddModalVisible(!isAddModalVisible)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskButton;
