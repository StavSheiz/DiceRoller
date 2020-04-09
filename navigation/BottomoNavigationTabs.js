import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../stlyes/color'

import { OneDice, TwoDice, ThreeDice } from '../components/Dice/Dice'

const Tab = createBottomTabNavigator();

const ROUTES = {
    ONE: {
        name: 'One',
        component: OneDice
    },
    TWO: {
        name: 'Two',
        component: TwoDice
    },
    THREE: {
        name: 'Three',
        component: ThreeDice
    }
}

const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
        let iconName = 'ios-cube';

        if (route.name === ROUTES.ONE.name) {
            return <Ionicons name={iconName} size={size} color={color} />;
        } else if (route.name === ROUTES.TWO.name) {
            return <View style={{ felx: 1, flexDirection: 'row' }}>
                <Ionicons name={iconName} size={size} color={color} />
                <Ionicons name={iconName} size={size} color={color} />
            </View>;
        } else if (route.name === ROUTES.THREE.name) {
            return <View style={{ felx: 1, flexDirection: 'row' }}>
                <Ionicons name={iconName} size={size} color={color} />
                <Ionicons name={iconName} size={size} color={color} />
                <Ionicons name={iconName} size={size} color={color} />
            </View>;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
    },
})

const tabBarOptions = {
    activeTintColor: colors.text,
    inactiveTintColor: colors.secondaryText,
    activeBackgroundColor: colors.primary,
    inactiveBackgroundColor: colors.primaryLight

}

class BottomNavigationTabs extends React.Component {
    render() {
        return (
            <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
                <Tab.Screen name={ROUTES.ONE.name} component={ROUTES.ONE.component} />
                <Tab.Screen name={ROUTES.TWO.name} component={ROUTES.TWO.component} />
                <Tab.Screen name={ROUTES.THREE.name} component={ROUTES.THREE.component} />
            </Tab.Navigator>
        );
    }
}

export { BottomNavigationTabs }