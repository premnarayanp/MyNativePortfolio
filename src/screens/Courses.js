import { FlatList, ScrollView, NativeBaseProvider, Center, HStack, Text, Avatar, View } from 'native-base';
import { skills, softSkills, coreJavaSkills } from '../constants/index';
import { Skills } from '../components';
export default function Courses({ navigation }) {
    return (
        <NativeBaseProvider>
            <ScrollView p='2' backgroundColor={'gray.200'}>

                <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginTop={'10'} marginBottom={'5'} backgroundColor={'white'}>
                    <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'blue.700'} fontWeight={'bold'} >
                        1. Full Stack Web Development
                    </Text>

                    <Text marginLeft={'0'} marginTop={'5'} color={'gray.400'}> {' \u25CF From Coding Ninjas'}</Text>
                    <Text marginLeft={'0'} color={'gray.400'}> {' \u25CF Duration 12 month'}</Text>
                    <Text marginLeft={'0'} color={'gray.400'}> {' \u25CF Started from 15/08/2022 '}</Text>
                    <Text marginLeft={'0'} color={'gray.400'}> {' \u25CF End on 15/08/2023 '}</Text>

                    <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'blue.700'} fontWeight={'bold'} >
                        Technical Skills</Text>
                    {
                        skills.map((item, index) => <Skills key={index} skill={item} />)
                    }
                </View>

                <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginTop={'5'} marginBottom={'5'} backgroundColor={'white'}>
                    <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'blue.700'} fontWeight={'bold'} >
                        2. Soft Skill Training Program
                    </Text>

                    <Text marginLeft={'0'} marginTop={'5'} color={'gray.400'}> {' \u25CF From Hublar /Coding Ninjas'}</Text>
                    <Text marginLeft={'0'} color={'gray.400'}> {' \u25CF Duration 2 month'}</Text>
                    <Text marginLeft={'0'} color={'gray.400'}> {' \u25CF Started from 15/11/2022 '}</Text>
                    <Text marginLeft={'0'} color={'gray.400'}> {' \u25CF End on 15/01/2024 '}</Text>

                    <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'blue.700'} fontWeight={'bold'} >
                        Soft Skills</Text>
                    {
                        softSkills.map((item, index) => <Skills key={index} skill={item} />)
                    }
                </View>

                <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginTop={'5'} marginBottom={'10'} backgroundColor={'white'}>
                    <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'blue.700'} fontWeight={'bold'} >
                        3. Core Java Training Program
                    </Text>

                    <Text marginLeft={'0'} marginTop={'5'} color={'gray.400'}> {' \u25CF From Techmat'}</Text>
                    <Text marginLeft={'0'} color={'gray.400'}> {' \u25CF Duration 5 month'}</Text>
                    <Text marginLeft={'0'} color={'gray.400'}> {' \u25CF Started from 15/02/2022 '}</Text>
                    <Text marginLeft={'0'} color={'gray.400'}> {' \u25CF End on 15/07/2022 '}</Text>

                    <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'blue.700'} fontWeight={'bold'} >
                        Technical Skills</Text>
                    {
                        coreJavaSkills.map((item, index) => <Skills key={index} skill={item} />)
                    }
                </View>
            </ScrollView>
        </NativeBaseProvider >
    );
}