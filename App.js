import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomePage from './navigations/HomePage';
import SettingsTab from './navigations/SettingsTab';
import Footer from './components/Footer';

const RootStack = createBottomTabNavigator({
		Home: { screen: HomePage },
		Settings: { screen: SettingsTab, params: { work: 25, rest: 5 } },
	},
	{
		tabBarComponent: props => <Footer {...props} />
	}
);

export default Container = createAppContainer(RootStack);
