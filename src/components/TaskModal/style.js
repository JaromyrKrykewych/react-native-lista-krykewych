import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    padding: 35,
  },
  modalTitleView: {
    borderBottomWidth: 1,
    borderBottomColor: "#c1c1c1",
    paddingBottom: 3,
  },
  modalTitle: {
    fontSize: 30,
  },
  modalDescriptionView: {
    marginTop: 35,
  },
  modalDescription: {
    fontSize: 22,
    fontStyle: "italic",
  },
  modalButtonContainer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
