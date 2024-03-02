import { FlatList, ScrollView, Center, HStack, Text, Avatar, View, Link } from 'native-base';
export default function ProjectsCard({ project, index }) {
    return (
        <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginTop={'5'} marginBottom={'5'} backgroundColor={'white'}>
            <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'blue.700'} fontWeight={'bold'} >
                {index}. {project.name}
            </Text>
            {
                project.content.map((item, index) => {
                    return (
                        item.isLink ?
                            <View key={"projectContent" + index}>
                                <Text marginLeft={'0'} color={'gray.700'} bold> {' \u25CF'}{item.heading}{":- "}</Text>
                                <Link href={item.text}>
                                    <Text marginLeft={'3'} color={'blue.400'}>{item.text}</Text>
                                </Link>
                            </View>
                            : <Text p={'0'} marginLeft={'0'} color={'gray.400'} key={"projectContent" + index} >
                                <Text p={'0'} color={'gray.700'} bold> {' \u25CF'}{item.heading}{":- "}</Text>
                                <Text color={'gray.700'} >{item.text}</Text>
                            </Text>
                    )
                })
            }
        </View>
    );
}