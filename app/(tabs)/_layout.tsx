import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(bottom)" 
          options={{
            title:'',
            drawerLabel: 'Home', // Displayed in the drawer
            // headerShown: false, // Hide the header for this screen
          }}
        />

      </Drawer>
    </GestureHandlerRootView>
  );
}
