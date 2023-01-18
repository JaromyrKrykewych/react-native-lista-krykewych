import { FlatList, Text, View } from 'react-native'

import React from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { styles } from './style'

const TaskList = ({ tasks, onHandlerTaskModal }) => {

  const renderItem = ({item}) => (
    <TaskItem
      item={item}
      onHandlerTaskModal={onHandlerTaskModal}
    />
  )
  const keyExtractor = (item) => item.id

  return (
    <View>
      {tasks.length === 0 ? (
      <Text style={styles.noItemsText}>You haven't added any task</Text>
      ) : (
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
      )
    }
    </View>
  )
}

export default TaskList