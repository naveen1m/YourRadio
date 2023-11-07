import React, { useContext } from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home, SearchPage, Notification, Profile, CreatePost, Login, ChatList, ChatDetails, Podcast } from './screens';
import Header from './components/Header';
import { GlobalContext } from './context/GlobalContext';
import CreatePodcast from './screens/CreatePodcast';
import { Image } from 'react-native';
import { Center } from '@gluestack-ui/themed';

// screen constants
const screenNames = {
    home: 'Feed',
    search: 'Search',
    createPost: 'Create post',
    profile: 'Profile',
    chat: 'Chat',
    notification: 'Notifications'
};

const Tab = createBottomTabNavigator();
const MainStack = createStackNavigator();
const ChatStack = createStackNavigator();
const ProfileStack = createStackNavigator();


function ChatStackNavigator() {
    return (
        <ChatStack.Navigator
            initialRouteName={'ChatList'}
            screenOptions={{
                headerShown: false
            }}>
            <ChatStack.Screen name='ChatList' component={ChatList} />
            <ChatStack.Screen name='ChatDetails' component={ChatDetails} />
        </ChatStack.Navigator>
    );
}
function ProfileStackNavigator() {
    return (<ProfileStack.Navigator
        initialRouteName={'Profile'}
        screenOptions={{
            headerShown: false
        }}>
        <ProfileStack.Screen name='Profile' component={Profile} />
        <ProfileStack.Screen name='Podcast' component={CreatePodcast} />

    </ProfileStack.Navigator>)
}

function StackNavigator() {
    const { user } = useContext(GlobalContext);
    const initialRouteName = user ? 'TabNav' : 'Login';
    return (
        <MainStack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{
                headerShown: false
            }}>
            <MainStack.Screen name='Login' component={Login} />
            <MainStack.Screen name='Home' component={Home} />
            <MainStack.Screen name='Profile' component={Profile} />
            <MainStack.Screen name='TabNav' component={TabNavigator} />
        </MainStack.Navigator>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={screenNames.home}

            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn == screenNames.home) {
                        iconName = focused ? require('../assets/newsfeed.png') : require('../assets/newsfeed.png');
                    } else if (rn == screenNames.search) {
                        iconName = focused ? require('../assets/search.png') : require('../assets/search.png');
                    } else if (rn == screenNames.createPost) {
                        iconName = focused ? require('../assets/microphone.png') : require('../assets/microphone.png')
                    } else if (rn == screenNames.chat) {
                        iconName = focused ? require('../assets/Message.png') : require('../assets/Message.png')
                    } else if (rn == screenNames.notification) {
                        iconName = focused ? require('../assets/notification.png') : require('../assets/notification.png');
                    } else if (rn == screenNames.profile) {
                        iconName = focused ? require('../assets/Profile.png') : require('../assets/Profile.png');
                    }

                    return (
                        <Center>
                            <Image source={iconName} style={{ width: size, height: size, alignSelf: 'center', justifyContent: 'center' }} />
                        </Center>
                    );
                },
                tabBarShowLabel: true,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    marginHorizontal: 5,
                    paddingBottom: 10,
                    paddingTop: 15,
                    borderRadius: 55,
                    // borderTopRightRadius: 15,
                    backgroundColor: '#A3AAAF',
                    position: 'absolute',
                    height: 60,
                    marginBottom: 10,
                },
                tabBarLabelStyle: { paddingTop: 13, color: 'black' },
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);

                    return <Header title={title} />;
                }

            })}>
            <Tab.Screen name={screenNames.home} component={Home} />
            <Tab.Screen name={screenNames.search} component={SearchPage} options={{ headerShown: true }} />
            <Tab.Screen name={screenNames.createPost} component={CreatePost} />
            <Tab.Screen name={screenNames.chat} component={ChatStackNavigator} />
            <Tab.Screen name={screenNames.notification} component={Notification} />
            <Tab.Screen name={screenNames.profile} component={ProfileStackNavigator} options={{ headerShown: true }} />
        </Tab.Navigator>
    );
}

function NativeNavigation() {
    return (
        <>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </>
    );
}

export default NativeNavigation;
