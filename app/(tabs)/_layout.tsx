import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="(bottom)" // This is the name of the page and must match the url from root
          options={{
            title:'',
            drawerLabel: 'Home', // Displayed in the drawer
            // headerShown: false, // Hide the header for this screen
          }}
        />
        {/* <Drawer.Screen
          name="search" // This is the name of the page and must match the url from root
          options={{
            title:'',
            drawerLabel: 'Search', // Displayed in the drawer
            // headerShown: false, // Hide the header for this screen
          }}
        /> */}
      </Drawer>
    </GestureHandlerRootView>
  );
}
