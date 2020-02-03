import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomePage from './navigations/HomePage';
import SettingsTab from './navigations/SettingsTab';

const RootStack = createStackNavigator({
	Home: HomePage,
	Settings: SettingsTab,
});

export default createAppContainer(RootStack);
