import { FlatList, View, Text } from 'native-base';
//import { FlatList, View, Text } from 'react-native';
import { ProjectCard } from '../../components/index';
import { projects } from '../../constants/index';
export default function ReactNativeProjects({ navigation }) {
    var index = 0;
    return (
        <View p='1'>
            <FlatList
                data={projects.reactNative}
                renderItem={({ item }) => <ProjectCard project={item} index={++index} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}