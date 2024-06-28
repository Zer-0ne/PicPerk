import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                backgroundColor: 'white',
                position: 'absolute',
                left: 20,
                right: 20,
                bottom: 20,
                // margin:10
                borderRadius: 20,
                height: 60,
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 5, // Add shadow for Android
                shadowOpacity: 0.3, // Add shadow for iOS
                shadowRadius: 10, // Customize shadow radius
                shadowColor: '#000', // Customize shadow color
                shadowOffset: { width: 0, height: 0 }, // Customize shadow offset
            },
            tabBarLabelStyle: {
                fontSize: 12,
                // Customize font size
                display: 'none'
            }
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    // headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    // headerShown: false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
                }}
            />
            <Tabs.Screen
                name="tech"
                options={{
                    title: 'Technology',
                    // headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="robot-vacuum" color={color} />,
                }}
            />
            <Tabs.Screen
                name="education"
                options={{
                    title: 'Education',
                    // headerShown: false,
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons size={28} name="book-education" color={color} />,
                }}
            />
        </Tabs>
    );
}
