import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getHeaderTitle } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Home, SearchPage, Podcast, Notification, Profile } from './screens'
import Header from './components/Header';


// screen constants
const homeName = 'Feed'
const profileName = 'Profile'
const searchName = 'Search'
const podcastName = 'Podcast'
const notificationName = 'Notifications'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn == homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn == searchName) {
                        iconName = focused ? 'search' : 'search-outline'
                    } else if (rn == podcastName) {
                        iconName = focused ? 'radio' : 'radio-outline'
                    } else if (rn == notificationName) {
                        iconName = focused ? 'notifications' : 'notifications-outline'
                    } else if (rn == profileName) {
                        iconName = focused ? 'person' : 'person-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarShowLabel: false,
                header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);

                    return <Header title={title} />
                }
            })}
        >

            <Tab.Screen name={homeName} component={Home} />
            <Tab.Screen name={searchName} component={StackNavigator} options={{ headerShown: false }} />
            <Tab.Screen name={podcastName} component={Podcast} />
            <Tab.Screen name={notificationName} component={Notification} />
            {/* <Tab.Screen name={profileName} component={Profile} /> */}

        </Tab.Navigator>
    )
}

function StackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Homescreen' component={SearchPage} options={{ headerShown: false }} />
            <Stack.Screen name='profile' component={Profile} />
        </Stack.Navigator>
    )
}
function NativeNavigation() {

    return (
        <>
            <NavigationContainer>
                <TabNavigator />
            </NavigationContainer>

        </>
    )
}

export default NativeNavigation
