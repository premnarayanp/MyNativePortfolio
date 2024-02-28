import { FlatList, View, Text, NativeBaseProvider } from 'native-base';
export default function More({ navigation }) {
    return (
        <NativeBaseProvider>
            <View p='1'>
                <Text>More</Text>
            </View>
        </NativeBaseProvider>
    );
}