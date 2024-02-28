import { StyleSheet, View } from 'react-native';
import { Center, Text, Avatar, Button, IconButton, Icon, VStack, HStack } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function Skills({ navigation, skill }) {
    return (
        <HStack width="100%" borderRadius={'20'} overflow="hidden" borderColor="coolGray.600" borderWidth="2" marginTop={'3'} alignItems={'center'}>

            <HStack paddingX={'2'} backgroundColor={skill.bgColor} width={skill.percent} alignItems={'center'}>
                <IconButton icon={<Icon color={skill.iconColor} size="md" as={MaterialCommunityIcons} name={skill.iconName} />} />
                <Text marginLeft={'5'} fontSize="md" bold>{skill.name}</Text>
            </HStack>
            <Text position={'absolute'} right={'0'} fontSize="sm" color={'gray.600'}>{skill.percent}</Text>
        </HStack>
    );
}

const styles = StyleSheet.create({
    btnColorLightPink: {
        backgroundColor: "#b38080",
    }
});