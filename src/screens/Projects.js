import { StyleSheet } from 'react-native';
import { HStack, VStack, Center, Text, Avatar, ScrollView, Button, IconButton, Icon, FlatList, View } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { ReactNativeProjects, ReactProjects, MERNProjects, JavaScriptProjects, NodeProjects } from '../screens/ProjectTabScreen/index';

export default function Projects({ navigation }) {
    const Tab = createMaterialTopTabNavigator();

    return (
        <NavigationContainer independent={true}>
            <Tab.Navigator
                initialRouteName="ReactNativeProjects"
                screenOptions={{
                    tabBarActiveTintColor: '#e91e63',
                    tabBarLabelStyle: { fontSize: 7 },
                    tabBarStyle: { backgroundColor: '#f0f8ff' },
                }}
            >
                <Tab.Screen name="ReactNativeProjects" component={ReactNativeProjects}
                    options={{
                        tabBarLabel: 'ReactNativ',
                        // tabBarLabel: () => 'ReactNative',
                        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="cellphone" color={color} size={20} />),
                    }} />

                <Tab.Screen name="ReactProjects" component={ReactProjects}
                    options={{
                        tabBarLabel: 'React',
                        //tabBarLabel: () => 'React',
                        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="react" color={color} size={20} />),
                    }} />

                <Tab.Screen name="MERNProjects" component={MERNProjects}
                    options={{
                        tabBarLabel: 'MERN',
                        // tabBarLabel: () => 'MERN',
                        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="layers-triple" color={color} size={20} />),
                    }} />
                <Tab.Screen name="JavaScriptProjects" component={JavaScriptProjects}
                    options={{
                        tabBarLabel: 'javascript',
                        // tabBarLabel: () => 'javascript',
                        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="language-javascript" color={color} size={20} />),
                    }} />
                <Tab.Screen name="NodeProjects" component={NodeProjects}
                    options={{
                        tabBarLabel: 'Node',
                        // tabBarLabel: () => 'Node',
                        tabBarIcon: ({ color, size }) => (<MaterialCommunityIcons name="nodejs" color={color} size={20} />),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    userInfo: {
        padding: 10,
    },

    btnColorLightPink: {
        backgroundColor: "#b38080",
    }
});