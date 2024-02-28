import { FlatList, View, NativeBaseProvider, Text } from 'native-base';
export default function Courses({ navigation }) {
    return (
        <NativeBaseProvider>
            <View p='1'>
                <Text>Courses</Text>
            </View>
        </NativeBaseProvider>
    );
}