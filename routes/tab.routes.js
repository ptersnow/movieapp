import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { House, MagnifyingGlass } from 'phosphor-react-native'

import { Home } from '../screens/Home'
import { Profile } from '../screens/Profile'
import { Saved } from '../screens/Saved'
import { Search } from '../screens/Search'

const Tab = createBottomTabNavigator()

export function TabRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <House size={size} color={color} weight="fill" />
                    )
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MagnifyingGlass size={size} color={color} weight="fill" />
                    )
                }}
            />

            <Tab.Screen name="Saved" component={Saved} />

            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}