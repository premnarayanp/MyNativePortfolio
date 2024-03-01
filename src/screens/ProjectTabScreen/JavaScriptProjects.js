import { FlatList, View, Text } from 'native-base';
import { ProjectCard } from '../../components/index';
import { projects } from '../../constants/index';
export default function JavaScriptProjects({ navigation, channel }) {
    var index = 0;
    return (
        <View p='1'>
            <FlatList
                data={projects.javaScript}
                renderItem={({ item }) => <ProjectCard project={item} index={++index} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}