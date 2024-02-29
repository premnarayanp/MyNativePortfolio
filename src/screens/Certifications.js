import { FlatList, View, Text, NativeBaseProvider } from 'native-base';
import { Certificate } from '../components';
import { certificates } from '../constants/index';
export default function Certification({ navigation }) {
    return (
        <NativeBaseProvider>
            <FlatList p={'2'}
                backgroundColor={'white'}
                data={certificates}
                renderItem={({ item }) => <Certificate certificate={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </NativeBaseProvider>
    );
}