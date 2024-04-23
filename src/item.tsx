import React from 'react'
import { Text, View } from 'react-native'
import { type ItemType } from './type'

const Item = ({ r, g, b, textColor, visible }: ItemType): React.ReactNode => {
	return (
		<View style={ {
			flex: 1,
			aspectRatio: 1,
			backgroundColor: `rgba(${r}, ${g}, ${b}, ${visible ? 1 : 0})`,
			justifyContent: 'center',
			alignItems: 'center'
		} }>
			{ visible && <Text style={ { color: textColor } }>{ `${r}, ${g}, ${b}` }</Text> }
		</View>
	)
}

export default React.memo(Item)