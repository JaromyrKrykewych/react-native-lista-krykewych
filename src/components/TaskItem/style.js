import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#626893',
    marginBottom: 10,
    borderRadius: 10,
    minHeight: 75,
  },
  itemList: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  taskDone: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
  },
  taskDoneText: {
    color:'#ffffff',
    fontSize: 10,
  }
})