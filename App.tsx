/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React, { useState } from 'react'
import {
	SafeAreaView,
	StatusBar,
	useColorScheme,
	useWindowDimensions,
} from 'react-native'
import { SceneMap, TabView } from 'react-native-tab-view'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import FirstScreen from './src/first-screen'
import SecondScreen from './src/second-screen'

const FirstRoute = () => (<FirstScreen />)

const SecondRoute = () => (<SecondScreen />)

const renderScene = SceneMap({
	first: FirstRoute,
	second: SecondRoute,
})

function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark'
	const layout = useWindowDimensions()
	const [index, setIndex] = useState(0)
	const [routes] = useState([
		{ key: 'first', title: '1' },
		{ key: 'second', title: '2' },
	])

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
		flex: 1
	}

	return (
		<SafeAreaView style={ backgroundStyle }>
			<StatusBar
				barStyle={ isDarkMode ? 'light-content' : 'dark-content' }
				backgroundColor={ backgroundStyle.backgroundColor }
			/>
			<TabView
				navigationState={ { index, routes } }
				renderScene={ renderScene }
				onIndexChange={ setIndex }
				initialLayout={ { width: layout.width, height: 500 } }
			/>
		</SafeAreaView>
	)
}

export default App