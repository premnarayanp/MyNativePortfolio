import { SafeAreaView } from 'react-native';
import { NativeBaseProvider, Icon, Box, Heading, Center, Text, FlatList } from 'native-base';
import React from 'react';
import DrawerCard from '../components/DrawerCard';
import { CommonActions } from '@react-navigation/native';

const data = [
    {
        title: 'Home',
        navigate: 'Home',
        icon: { name: "home", color: "blue.600", size: 17 },
        isNew: false,
        bgColor: 'cyan'
    },
    {
        title: 'About',
        navigate: 'Home',
        icon: { name: "information", color: "purple.600", size: 10 },
    },
    {
        title: 'Skills',
        navigate: 'Home',
        icon: { name: "codepen", color: "pink.600", size: 10 },
        isNew: false,
    },
    {
        title: 'Courses',
        navigate: 'Courses',
        icon: { name: "book-open-variant", color: "cyan.600", size: 10 },
        isNew: false,
    },
    {
        title: 'Certifications',
        navigate: 'Certifications',
        icon: { name: "certificate", color: "green.600", size: 10 },
    },
    {
        title: 'Projects',
        navigate: 'Projects',
        icon: { name: "file-code", color: "blue.400", size: 10 },
    },
    {
        title: 'More',
        navigate: 'More',
        icon: { name: "more", color: "pink.400", size: 10 },
        isNew: false,
    },
    {
        title: 'Linkedin',
        icon: { name: "linkedin", color: "blue.600", size: 10 },
    },
    {
        title: 'Mail',
        icon: { name: "mail", color: "green.600", size: 10 },
        isNew: false,
    },
    {
        title: 'WhatsApp',
        icon: { name: "whatsapp", color: "green.600", size: 10 },
        isNew: false,
    },
    {
        title: 'twitter',
        icon: { name: "twitter", color: "blue.600", size: 10 },
        isNew: false,
    },
    {
        title: 'Instagram',
        icon: { name: "instagram", color: "purple", size: 10 },
        isNew: false,
    },
    {
        title: 'Facebook',
        icon: { name: "facebook", color: "blue.600", size: 10 },
    },
    {
        title: 'Share',
        icon: { name: "share-circle", color: "green.400", size: 10 },
        isNew: false,
    },
];
const CustomDrawer = ({ navigation }) => {
    return (
        <NativeBaseProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Box style={{ backgroundColor: 'white', flex: 1 }}>
                    <Heading size="xl" color="gray" textAlign="center" marginTop="10"> NewsApp </Heading>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <DrawerCard
                                    title={item.title}
                                    icon={item.icon}
                                    bgColor={item.bgColor}
                                    onClick={() => {
                                        navigation.closeDrawer();
                                        if (item.navigate) {
                                            navigation.dispatch(CommonActions.navigate({ name: item.navigate }));
                                        }
                                    }}
                                />
                            );
                        }}
                    />
                </Box>
            </SafeAreaView>
        </NativeBaseProvider>
    );
};

export default CustomDrawer;