import Start from "./components/Start";
import Chat from "./components/Chat";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { LogBox } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
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

  return (
    /* Wrap the app with NavigationContainer */
    <NavigationContainer>
      {/* Create a stack navigator with initial route Start  */}
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat {...props} db={db} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
