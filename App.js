import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomePage from './navigations/HomePage';
import SettingsTab from './navigations/SettingsTab';

const RootStack = createBottomTabNavigator({
	Home: HomePage,
	Settings: SettingsTab,
});

export default Container = createAppContainer(RootStack);
