import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./style";

const AddTaskModal = ({
  isAddModalVisible,
  onHandlerCloseAddModal,
  task,
  onHandlerChange,
  onAddingHandler,
}) => {
  return (
    <View style={styles.viewContainer}>
      <Modal
        visible={isAddModalVisible}
        animationType={"slide"}
        onRequestClose={onHandlerCloseAddModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onHandlerCloseAddModal}
          >
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
          <View style={styles.title}>
            <Text style={styles.titleText}>New Task</Text>
          </View>
          <View style={styles.formTask}>
            <TextInput
              style={styles.input}
              autoComplete="off"
              autoCapitalize="true"
              placeholder="Title task"
              value={task?.title}
              onChangeText={(value) => onHandlerChange("title", value)}
            />
            <TextInput
              style={styles.input}
              multiline
              autoComplete="off"
              autoCapitalize="true"
              placeholder="Description"
              value={task?.description}
              onChangeText={(value) => onHandlerChange("description", value)}
            />
          </View>
          <View style={styles.addingContainer}>
            {task?.title !== "" && (
              <TouchableOpacity
                style={styles.addingButton}
                onPress={onAddingHandler}
              >
                <Text style={styles.addingButtonText}>Add task</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddTaskModal;
