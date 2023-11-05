import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Home, SearchPage, Podcast, Notification, Profile, CreatePost, Login } from './screens'
import Header from './components/Header';
import ChatList from './screens/chat/ChatList';
import { GlobalContext } from './context/GlobalContext';


// screen constants
const screenNames = {
    home: 'Feed',
    search: 'Search',
    createPost: 'Create post',
    profile: 'Profile',
    chatList: 'Messages',
    notification: 'Notifications'
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function StackNavigator() {
    const { user, setUser } = useContext(GlobalContext);
    return (
        <Stack.Navigator initialRouteName={!user ? 'Login' : "HomeScreen"} >
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Homescreen' component={SearchPage} options={{ headerShown: false }} />
            <Stack.Screen name='profile' component={Profile} />
        </Stack.Navigator>
    )
}

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={screenNames.home}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;
                    // if (rn == formmodal) {

                    if (rn == screenNames.home) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn == screenNames.search) {
                        iconName = focused ? 'search' : 'search-outline'
                    } else if (rn == screenNames.createPost) {
                        iconName = focused ? 'mic-circle' : 'mic-circle-outline'
                    } else if (rn == screenNames.chatList) {
                        iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'
                    }
                    else if (rn == screenNames.notification) {
                        iconName = focused ? 'notifications' : 'notifications-outline'
                    } else if (rn == screenNames.profile) {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarShowLabel: true,
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);

                    return <Header title={title} />
                }
            })}
        >

            <Tab.Screen name={screenNames.home} component={Home} />
            <Tab.Screen name={screenNames.search} component={SearchPage} options={{ headerShown: false }} />
            <Tab.Screen name={screenNames.createPost} component={CreatePost} />
            <Tab.Screen name={screenNames.chatList} component={ChatList} />
            <Tab.Screen name={screenNames.notification} component={Notification} />
            <Tab.Screen name={screenNames.profile} component={Profile} options={{ headerShown: false }} />

        </Tab.Navigator>
    )
}


function NativeNavigation() {

    return (
        <>
            <NavigationContainer>
                <TabNavigator />
                {/* <StackNavigator /> */}
            </NavigationContainer>

        </>
    )
}

export default NativeNavigation
