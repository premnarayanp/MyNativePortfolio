import { FlatList, ScrollView, Center, HStack, Text, Avatar, View, VStack, Icon, Link } from 'native-base';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { Skills } from '../components';
import { skills, softSkills, myContacts } from '../constants/index';

const myImg = require('../assets/my_photos.png');
export default function Home({ navigation }) {
  return (
    <ScrollView p='2' backgroundColor={'gray.200'}>
      <VStack justifyContent={'center'} borderWidth={'1'} borderColor={'pink.500'} borderRadius={'20'} padding={'3'} backgroundColor={'white'}>
        <Center>
          <Avatar size="xl" source={{
            uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          }}> </Avatar>
          <Text fontSize='lg' bold>Premnarayan Patel</Text>
        </Center>

        <HStack justifyContent='space-between' alignItems={'center'} marginTop={'5'}>
          {
            myContacts.socialLink.map((item, index) =>
              <Link href={item.link} key={'socialLink' + index} _hover={{ bg: 'red.500' }} _pressed={{ bg: 'green.500' }}>
                <Center>
                  <Icon as={<MaterialCommunityIcons name={item.iconName} />} color={item.iconColor} size="25" />
                  <Text style={{ fontSize: 17, fontWeight: '700', color: '#8e8e8e' }}>{item.title} </Text>
                </Center>
              </Link>
            )
          }
        </HStack>

        {
          myContacts.contact.map((item, index) =>
            <HStack alignItems={'center'} justifyContent={'flex-start'} marginTop={'5'} key={'contact' + index}>
              <Icon as={<MaterialCommunityIcons name={item.iconName} />} color={item.iconColor} size="25" />
              <Text style={{ fontSize: 17, fontWeight: '700', color: '#8e8e8e' }}>{item.value} </Text>
            </HStack>
          )
        }

      </VStack>

      <Center marginTop={'6'} borderWidth={'1'} borderColor={'pink.500'} borderRadius={'20'} padding={'3'} backgroundColor={'white'}>
        <Text borderBottomWidth={'2'} width={'100%'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'gray.700'} fontWeight={'bold'} >About me</Text>
        <Text textAlign={'justify'} color={'gray.600'} bold>My name is Premnarayan Patel. I am from Sagar,MP. I graduated with a BTech in
          Computer Science from Gyan Sagar College of Engineering   with 8.08 CGPA.
          I've completed a comprehensive Full Stack Web Development Bootcamp from Coding Ninjas, specializing in MERN stack, Java, JavaScript, and MySQL.
          I hold excellent certifications in Java, DSA, Full Stack Frontend, and Full Stack Backend, along with a certification in React.
          I have completed more than 15 personal projects, including a Chat-App, Pdf Extractor and Pdf-Editor, open AI on pdf, Placement sell, User control system etc. Which showcase my proficiency in React, Node.js, and MERN stack. These projects reflect my ability to design user-friendly interfaces and implement complex functionalities.
          I'm excited to leverage my skills in a dynamic development team, where my strengths in problem-solving, teamwork, and adaptability, along with my passion for coding, can contribute to innovative projects."
        </Text>
      </Center>


      <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginTop={'5'} backgroundColor={'white'}>
        <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'gray.700'} fontWeight={'bold'} > Soft Skills</Text>
        {
          softSkills.map((item, index) => <Skills key={index} skill={item} />)
        }
      </View>


      <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginTop={'5'} backgroundColor={'white'}>
        <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'gray.700'} fontWeight={'bold'} >Technical Skills</Text>
        {
          skills.map((item, index) => <Skills key={index} skill={item} />)
        }
      </View>

      <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginTop={'5'} backgroundColor={'white'}>
        <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'gray.700'} fontWeight={'bold'} > Experience</Text>
        <Text fontSize={'lg'} color={'red.400'} textAlign={'center'} marginBottom={'5'} marginTop={'5'} bold>No Experience</Text>
      </View>

      <View padding={'5'} borderWidth={'1'} borderColor={'gray.500'} borderRadius={'20'} marginTop={'5'} marginBottom={'10'} backgroundColor={'white'}>
        <Text borderBottomWidth={'2'} borderBottomColor={'blue.500'} bold fontSize={'20'} textAlign={'center'} color={'gray.700'} fontWeight={'bold'} > Internship</Text>
        <Text fontSize={'lg'} color={'red.400'} textAlign={'center'} marginBottom={'5'} marginTop={'5'} bold>No Internship </Text>
      </View>
    </ScrollView>
  );
}
