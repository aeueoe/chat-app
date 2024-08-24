import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { getAuth, signInAnonymously } from "firebase/auth";

// Define the Start component
const Start = ({ navigation }) => {
  const auth = getAuth();
  // State to hold the name input value
  const [name, setName] = useState("");
  // State to hold the chosen background color
  const [background, setBackground] = useState("");

  // handle the sign-in anonymously process for the user.
  const signInUser = () => {
    signInAnonymously(auth)
      .then((result) => {
        navigation.navigate("Chat", {
          name: name,
          background: background,
          userID: result.user.uid,
        });
        Alert.alert("Signed in Successfully!");
      })
      .catch((error) => {
        Alert.alert("Unable to sign in, try later again.");
      });
  };

  return (
    <ImageBackground
      source={require("../assets/bgImg.png")}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Text style={styles.appTitle}>Say Hi!</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={setName}
          placeholder="Your Name"
        ></TextInput>

        <View style={styles.chooseColorBox}>
          <Text style={styles.chooseColorText}>Choose Background Color</Text>
          <View style={styles.colorButtonsContainer}>
            {/* Render a TouchableOpacity for each color option */}
            <TouchableOpacity
              accessible={true}
              accessibilityLabel="More options"
              accessibilityHint="Lets you choose to send an image or your geolocation."
              accessibilityRole="button"
              style={[
                styles.chooseColor,
                { backgroundColor: "#090C08" },
                background === "#090C08" && styles.selectedColor,
              ]}
              // Set the function to handle button press
              onPress={() => setBackground("#090C08")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.chooseColor,
                { backgroundColor: "#474056" },
                background === "#474056" && styles.selectedColor,
              ]}
              onPress={() => setBackground("#474056")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.chooseColor,
                { backgroundColor: "#8A95A5" },
                background === "#8A95A5" && styles.selectedColor,
              ]}
              onPress={() => setBackground("#8A95A5")}
            ></TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.chooseColor,
                { backgroundColor: "#B9C6AE" },
                background === "#B9C6AE" && styles.selectedColor,
              ]}
              onPress={() => setBackground("#B9C6AE")}
            ></TouchableOpacity>
          </View>
        </View>

        {/* Render a TouchableOpacity for starting the chat */}
        <TouchableOpacity style={styles.button} onPress={signInUser}>
          <Text style={styles.textButton}>Start Chatting</Text>
        </TouchableOpacity>
      </View>
      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </ImageBackground>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appTitle: {
    flex: 1,
    fontSize: 45,
    fontWeight: "600",
    color: "#ffffff",
    justifyContent: "center",
    marginTop: 80,
  },
  container: {
    width: "88%",
    height: "44%",
    backgroundColor: "white",
    alignItems: "center",
    marginBottom: 50,
    justifyContent: "space-evenly",
  },

  textInput: {
    width: "88%",
    borderColor: "#757083",
    borderRadius: 4,
    color: "#757083",
    fontSize: 16,
    fontWeight: "300",
    opacity: 50,
    padding: 15,
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#757083",
    borderRadius: 4,
    height: "20%",
    justifyContent: "center",
    padding: 10,
    width: "88%",
  },
  textButton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
  },
  chooseColorBox: {
    width: "88%",
    height: "20%",
    alignItems: "center",
    justifyContent: "space-between",
  },

  colorButtonsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
  },
  chooseColor: {
    width: 40,
    height: 40,
    borderRadius: 25,
    margin: 5,
  },

  selectedColor: {
    borderColor: "#7d6c17",
    borderWidth: 1.5,
  },

  chooseColorText: {
    fontSize: 16,
    fontWeight: "300",
    color: "#757083",
    alignSelf: "center",
    marginBottom: 10,
  },
});

export default Start;
