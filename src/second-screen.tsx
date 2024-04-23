import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Switch, Text, View } from 'react-native'
import { secondData } from './data'
import Item from './item'

const SecondScreen = (): React.ReactNode => {
	const [mark, setMark] = useState(false)
	const [data, setData] = useState(secondData)

	const isGrayScale = useCallback((r: number, g: number, b: number) => {
		const max = Math.max(r, g, b)
		const min = Math.min(r, g, b)
		return max - min < 10
	}, [])

	useEffect(() => {
		setData(
			mark ?
				secondData.map(item => ({ ...item, visible: !isGrayScale(item.r, item.g, item.b) })) :
				secondData
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
					<Text>Hide grayscale</Text>
				</View>
			}
		/>
	)
}

export default React.memo(SecondScreen)