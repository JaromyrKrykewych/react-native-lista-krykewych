import { Button, Modal, Text, View } from "react-native";

import React from "react";
import { styles } from "./style";

const TaskModal = ({
  isTaskModalVisible,
  task,
  onRequestCloseModal,
  onHandlerDelete,
  onHandlerTask
}) => {
  return (
    <View>
      <Modal visible={isTaskModalVisible} onRequestClose={onRequestCloseModal}>
        <View style={styles.modalView}>
          <View style={styles.modalTitleView}>
            <Text style={styles.modalTitle}>{task?.title}</Text>
          </View>
          <View style={styles.modalDescriptionView}>
            <Text style={styles.modalDescription}>{task?.description}</Text>
          </View>
          <View style={styles.modalButtonContainer}>
            {
              task?.done === false && (
                <Button title="Done" color="blue" onPress={onHandlerTask} />
              )
            }
            <Button title="Cancel" color="#626893" onPress={onRequestCloseModal} />
            <Button title="Delete" color="red" onPress={onHandlerDelete} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TaskModal;
