import { FlatList, ScrollView, NativeBaseProvider, Center, HStack, Text, Avatar, View, Link } from 'native-base';
export default function ProjectsCard({ project, index }) {
    return (
        <NativeBaseProvider>
            <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginTop={'5'} marginBottom={'5'} backgroundColor={'white'}>
                <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'blue.700'} fontWeight={'bold'} >
                    {index}. {project.name}
                </Text>
                {
                    project.content.map((item) => {
                        return (
                            item.isLink ? <Link href={item.text}>
                                <Text marginLeft={'0'} textAlign={'start'} color={'blue.200'} bold> {' \u25CF'}{item.heading}{":- "}{item.text}</Text>
                            </Link>
                                : <Text marginLeft={'0'} textAlign={'start'} color={'gray.400'} bold> {' \u25CF'}{item.heading}{":- "}{item.text}</Text>
                        )
                    })
                }
            </View>

        </NativeBaseProvider >
    );
}