import Chat from "./components/Chat";
import Start from "./components/Start";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { LogBox, Alert } from "react-native";
import { getStorage } from "firebase/storage";

LogBox.ignoreAllLogs();
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

const Stack = createNativeStackNavigator();

const App = () => {
  // Define a new state that represents the network connectivity status
  const connectionStatus = useNetInfo();

  // useEffect to display an alert popup if no internet connection
  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection lost!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  const firebaseConfig = {
    apiKey: "AIzaSyCV8ak3XAZIpzI3iU3B_rOqUWkJ-IPiN8k",
    authDomain: "chatapp-de2ae.firebaseapp.com",
    projectId: "chatapp-de2ae",
    storageBucket: "chatapp-de2ae.appspot.com",
    messagingSenderId: "163554410195",
    appId: "1:163554410195:web:2ba14f35f28af82e379e26",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // Initialize Firebase Storage handler
  const storage = getStorage(app);

  return (
    /* Wrap the app with NavigationContainer */
    <NavigationContainer>
      {/* Create a stack navigator with initial route Start  */}
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
