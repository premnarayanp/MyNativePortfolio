import { FlatList, ScrollView, Center, HStack, Text, Avatar, View, Link } from 'native-base';
export default function MoreDetailsCard({ moreDetail, index }) {
    return (
        <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginBottom={'5'} backgroundColor={'white'}>
            <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'blue.700'} fontWeight={'bold'} >
                {moreDetail.title}
            </Text>
            {
                moreDetail.content.map((item, index) => {
                    return (
                        <Text p={'0'} marginLeft={'0'} color={'gray.400'} key={"moreDetailContent" + index}>
                            <Text p={'0'} fontSize={'lg'} color={'gray.700'} bold> {' \u25CF'}</Text>
                            <Text color={'gray.700'} >{item}</Text>
                        </Text>
                    )
                })
            }
        </View>
    );
}