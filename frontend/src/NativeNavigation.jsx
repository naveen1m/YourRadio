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
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (rn == screenNames.search) {
                        iconName = focused ? 'search' : 'search-outline';
                    } else if (rn == screenNames.createPost) {
                        iconName = focused ? 'mic-circle' : 'mic-circle-outline'
                    } else if (rn == screenNames.chat) {
                        iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'
                    } else if (rn == screenNames.notification) {
                        iconName = focused ? 'notifications' : 'notifications-outline';
                    } else if (rn == screenNames.profile) {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarShowLabel: false,
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
