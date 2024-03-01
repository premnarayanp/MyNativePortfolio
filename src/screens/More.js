import { FlatList, ScrollView, NativeBaseProvider, Center, HStack, Text, Avatar, View, VStack, Icon, Link } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { myContacts, moreDetails } from '../constants/index';
import { MoreDetailsCard } from '../components/index';
const myImg = require('../assets/my_photos.png');

export default function More({ navigation }) {
    return (
        <NativeBaseProvider>
            <ScrollView p='2' backgroundColor={'gray.200'}>
                <VStack justifyContent={'center'} borderWidth={'1'} borderColor={'pink.500'} borderRadius={'20'} padding={'3'} backgroundColor={'white'}>
                    <Center>
                        <Avatar size="xl" source={{
                            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                        }}> </Avatar>
                        <Text fontSize='lg' bold>Premnarayan Patel</Text>
                    </Center>

                    <VStack justifyContent='space-between' alignItems={'flex-start'} marginTop={'5'}>
                        {
                            myContacts.socialLink.map((item, index) =>
                                <Link href={item.link} key={'socialLinkMore' + index} marginTop={'5'}>
                                    <HStack alignItems={'center'} justifyContent={'space-between'}>
                                        <Icon as={<MaterialCommunityIcons name={item.iconName} />} color={item.iconColor} size="25" />
                                        <Text style={{ fontSize: 17, fontWeight: '700', color: '#8e8e8e' }}>{item.link} </Text>
                                    </HStack>
                                </Link>
                            )
                        }
                    </VStack>

                    {
                        myContacts.contact.map((item, index) =>
                            <Text marginTop={'5'} alignItems={'center'} key={'contactMore' + index}>
                                <Icon as={<MaterialCommunityIcons name={item.iconName} />} color={item.iconColor} size="25" />
                                <Text style={{ fontSize: 17, fontWeight: '700', color: '#8e8e8e' }}>{item.value} </Text>
                            </Text>
                        )
                    }
                </VStack>

                <MoreDetailsCard moreDetail={moreDetails.hobby} />
                <MoreDetailsCard moreDetail={moreDetails.achievement} />
            </ScrollView>
        </NativeBaseProvider >
    );
}