import React, { useContext } from 'react';
import { NavigationContainer, getFocusedRouteNameFromRoute, useIsFocused, useRoute } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Home, SearchPage, Notification, Profile, CreatePost, Login, ChatList, ChatDetails, Podcast, SearchedUser } from './screens';
import Header from './components/Header';
import { GlobalContext } from './context/GlobalContext';
import CreatePodcast from './screens/CreatePodcast';
import { Image, StyleSheet } from 'react-native';
import { Box, Center, View } from '@gluestack-ui/themed';

// screen constants
const screenNames = {
    home: 'News feed',
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
const SearchStack = createStackNavigator();


function ChatStackNavigator({ navigation }) {

    return (
        <ChatStack.Navigator
            initialRouteName={'ChatList'}

        >
            <ChatStack.Screen name='ChatList' component={ChatList} options={{ headerShown: false }} />
            <ChatStack.Screen name='ChatDetails' component={ChatDetails}

                options={({ route }) => {
                    const { name } = route.params;

                    return ({
                        title: name,
                        headerShown: true,
                        headerBackTitleVisible: false,

                        headerStyle: {
                            backgroundColor: '#02CCFE',
                            borderRadius: 14,
                            height: 40,
                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18, // Set your desired font size

                        },
                        tabBarVisible: false,

                    });
                }} />
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
function SearchStackNavigator({ navigation }) {
    return (
        <SearchStack.Navigator
            initialRouteName={'SearchPage'}

        >
            <SearchStack.Screen name='SearchPage' component={SearchPage} options={{ headerShown: false }} />
            <SearchStack.Screen name='SearchedUser' component={SearchedUser}

                options={({ route }) => {
                    const { name } = route.params;

                    return ({
                        title: '',
                        headerShown: true,
                        headerBackTitleVisible: false,

                        headerStyle: {
                            backgroundColor: '#A3AAAF',
                            borderRadius: 14,
                            height: 40,

                        },
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 18, // Set your desired font size
                            backgroundColor: 'transparent'
                        },
                        tabBarVisible: false,

                    });
                }} />
        </SearchStack.Navigator>
    );
}

function StackNavigator() {
    const { user } = useContext(GlobalContext);
    const isUserLoggedIn = !!user;
    const initialRouteName = isUserLoggedIn ? 'TabNav' : 'Login';
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
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'whitesmoke' }}>
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
                            <View >
                                <Center>
                                    <Image source={iconName} style={{
                                        width: size, height: size, alignSelf: 'center', justifyContent: 'center',
                                    }} />
                                </Center>
                            </View>
                        );
                    },
                    tabBarShowLabel: true,
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        // marginHorizontal: 5,
                        paddingBottom: 10,
                        paddingTop: 15,
                        borderRadius: 15,
                        backgroundColor: '#A3AAAF',
                        // position: 'absolute',
                        height: 60,

                        marginBottom: 9,
                        marginTop: 8,
                        // borderWidth: 2,

                    },
                    tabBarLabelStyle: { paddingTop: 13, color: 'black' },
                    header: ({ navigation, route, options }) => {
                        const title = getHeaderTitle(options, route.name);

                        return <Header title={title} />;
                    }

                })}>
                <Tab.Screen name={screenNames.home} component={Home} />
                <Tab.Screen name={screenNames.search} component={SearchStackNavigator} options={({ route }) => ({
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                        // console.log('routename', routeName);
                        if (routeName === 'SearchedUser') {
                            return { display: "none" }
                        }
                        else {
                            return ({
                                marginHorizontal: 5,
                                paddingBottom: 10,
                                paddingTop: 15,
                                borderRadius: 55,
                                // borderTopRightRadius: 15,
                                backgroundColor: '#A3AAAF',
                                position: 'absolute',
                                height: 60,
                                marginBottom: 10,
                            })
                        }
                        return
                    })(route),
                })} />
                <Tab.Screen name={screenNames.createPost} component={CreatePost} />
                <Tab.Screen name={screenNames.chat} component={ChatStackNavigator} options={({ route }) => ({
                    tabBarStyle: ((route) => {
                        const routeName = getFocusedRouteNameFromRoute(route) ?? ""
                        console.log(routeName);
                        if (routeName === 'ChatDetails') {
                            return { display: "none" }
                        }
                        else {
                            return ({
                                marginHorizontal: 5,
                                paddingBottom: 10,
                                paddingTop: 15,
                                borderRadius: 55,
                                // borderTopRightRadius: 15,
                                backgroundColor: '#A3AAAF',
                                position: 'absolute',
                                height: 60,
                                marginBottom: 10,
                            })
                        }
                        return
                    })(route),
                })} />
                <Tab.Screen name={screenNames.notification} component={Notification} />
                <Tab.Screen name={screenNames.profile} component={ProfileStackNavigator} options={{ headerShown: true }} />
            </Tab.Navigator>
        </View>
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

const styles = StyleSheet.create({
    "button": {
        "background": "#ff4931",
        "boxShadow": "0 0 4px rgba(0, 0, 0, 0.3)",
        "transition": "all 200ms ease"
    },
    "button_hover": {
        "transition": "all 100ms ease",
        "transform": "scale(1.05)",
        "boxShadow": "0 0 8px rgba(0, 0, 0, 0.5)"
    },
    "button_active": {
        "transition": "all 50ms ease",
        "transform": "scale(1.03)",
        "background": "red",
        "color": 'green'
    }
})