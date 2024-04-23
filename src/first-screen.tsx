import React, { useEffect, useState } from 'react'
import { FlatList, Switch, Text, View } from 'react-native'
import { firstData } from './data'
import Item from './item'

const FirstScreen = (): React.ReactNode => {
	const [mark, setMark] = useState(false)
	const [data, setData] = useState(firstData)

	useEffect(() => {
		setData(
			mark ?
				firstData.map(item => ({ ...item, visible: item.textColor !== 'yellow' })) :
				firstData
		)
	}, [mark])

	return (
		<FlatList
			data={ data }
			keyExtractor={ (item, index) => `${item.r},${item.g},${item.b}--${index}` }
			renderItem={ ({ item }) => (<Item { ...item } />) }
			numColumns={ 5 }
			scrollEnabled={ false }
			ListFooterComponent={
				<View style={ {
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					marginTop: 16
				} }>
					<Switch
						value={ mark }
						onValueChange={ setMark }
					/>
					<Text>Hide marked</Text>
				</View>
			}
		/>
	)
}

export default React.memo(FirstScreen)
