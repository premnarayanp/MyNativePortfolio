import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Home, Courses, Certifications, Projects, More } from '../screens/index';

const Tab = createBottomTabNavigator();

//----------------------Root Bottom Tab-----------------------------
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Courses"
                component={Courses}
                options={{
                    tabBarLabel: 'Course',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book-open-variant" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Certifications"
                component={Certifications}
                options={{
                    tabBarLabel: 'Certifications',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="certificate" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Projects"
                component={Projects}
                options={{
                    tabBarLabel: 'Projects',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="file-code" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarLabel: 'More',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="more" color={color} size={size} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomTabNavigator;
