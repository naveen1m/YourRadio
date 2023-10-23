import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
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


function NativeNavigation() {
    const Tab = createBottomTabNavigator();
    // const Stack = createStackNavigator();
    return (
        <>
            <NavigationContainer>
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
                    <Tab.Screen name={searchName} component={SearchPage} />
                    <Tab.Screen name={podcastName} component={Podcast} />
                    <Tab.Screen name={notificationName} component={Notification} />
                    {/* <Tab.Screen name={profileName} component={Profile} /> */}

                </Tab.Navigator>
                {/* <Stack.Navigator>
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen name="postmodal" component={PostModal} />
                    </Stack.Group>
                </Stack.Navigator> */}

            </NavigationContainer>

        </>
    )
}

export default NativeNavigation
