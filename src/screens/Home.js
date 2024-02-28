import { FlatList, ScrollView, NativeBaseProvider, Center, HStack, Text, Avatar, View } from 'native-base';
import { Skills } from '../components';
import { skills } from '../constants/index';



const myImg = require('../assets/my_photos.png');
export default function Home({ navigation }) {
  return (
    <NativeBaseProvider>
      <ScrollView p='2' backgroundColor={'gray.200'}>

        <HStack justifyContent={'center'}>
          <Center>
            <Avatar size="xl" source={{
              uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }}> </Avatar>
            <Text fontSize="md" bold>Premnarayan Patel</Text>
          </Center>
        </HStack>

        <Center marginTop={'10'} borderWidth={'1'} borderColor={'pink.500'} borderRadius={'20'} padding={'3'} backgroundColor={'white'}>
          <Text textAlign={'justify'} color={'blue.400'}>My name is Premnarayan Patel. I am from Sagar,MP. I graduated with a BTech in
            Computer Science from Gyan Sagar College of Engineering   with 8.08 CGPA.
            I've completed a comprehensive Full Stack Web Development Bootcamp from Coding Ninjas, specializing in MERN stack, Java, JavaScript, and MySQL.
            I hold excellent certifications in Java, DSA, Full Stack Frontend, and Full Stack Backend, along with a certification in React.
            I have completed more than 15 personal projects, including a Chat-App, Pdf Extractor and Pdf-Editor, open AI on pdf, Placement sell, User control system etc. Which showcase my proficiency in React, Node.js, and MERN stack. These projects reflect my ability to design user-friendly interfaces and implement complex functionalities.
            I'm excited to leverage my skills in a dynamic development team, where my strengths in problem-solving, teamwork, and adaptability, along with my passion for coding, can contribute to innovative projects."
          </Text>
        </Center>


        <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginTop={'10'} marginBottom={'10'} backgroundColor={'white'}>
          <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'gray.700'} fontWeight={'bold'} >Skills</Text>
          <FlatList
            data={skills}
            renderItem={({ item }) => <Skills skill={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </NativeBaseProvider >
  );
}