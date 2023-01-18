import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./style";

const TaskItem = ({item, onHandlerTaskModal}) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandlerTaskModal(item)}
    >
      <Text style={styles.itemList}>{item.title}</Text>
      {item?.done === true && (
        <View style={styles.taskDone}>
          <Text style={styles.taskDoneText}>Done</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default TaskItem;
