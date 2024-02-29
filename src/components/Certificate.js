import { StyleSheet } from 'react-native';
import { Center, Text, Image, VStack, HStack } from 'native-base';

export default function Certificate({ certificate }) {
    return (
        <Center overflow="hidden" marginTop={'3'} alignItems={'center'} >
            <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'gray.700'} fontWeight={'bold'} >
                {certificate.title}
            </Text>

            <Image borderRadius={'5'} backgroundColor={'white'} width={550} height={250} resizeMode={"cover"} alt='hi'
                source={certificate.imageUrl}
            />
        </Center>
    );
}