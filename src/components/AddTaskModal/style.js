import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalContainer: {
    padding: 35,
  },
  buttonContainer: {
    width: 40,
    marginLeft: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 20,
    lineHeight: 20,
    color: "#ffffff",
  },
  title: {
    marginVertical: 25,
  },
  titleText: {
    textAlign: 'center',
    fontSize: 28,
  },
  input: {
    paddingTop: 20,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#c2c2c2',
    fontSize: 20,
  },
  addingContainer: {
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addingButton: {
    backgroundColor: 'orange',
    width: 110,
    alignItems:'center',
    paddingVertical: 3,
    borderRadius: 15,
  },
  addingButtonText: {
    fontSize: 21,
    color: '#ffffff',
  }
})