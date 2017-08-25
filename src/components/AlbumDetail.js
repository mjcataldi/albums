import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Linking, {  url } from 'react-native';


const AlbumDetail = (props) => {
	// This process is called destructuring.  DESTRUCTURE
	const { title, artist, thumbnail_image, image } = album;
	const { 
		headerContentStyle,
		headerTextStyle,
		thumbnailStyle, 
		thumbnailContainerStyle,
		imageStyle
	} = styles; 

  return (
    <Card>
    	<CardSection style={ headerContentStyle }>
				<View style={ thumbnailContainerStyle }>
					<Image 
						style={ thumbnailStyle } 
						source={ { uri: thumbnail_image } } />
				</View>

				<View style={ headerTextStyle }>
		  		<Text>{props.album.title}</Text>
	      </View>
    	</CardSection>

    	<CardSection>
    		<Image source={ { uri: image } } style={ imageStyle } />
    	</CardSection>

    	<CardSection>
    		<Button onPress={ () => Linking.openURL(url) }>Buy Me</Button>
    	</CardSection>
    </Card>
  	);
	}

const styles = {
	headerContentStyle: {
		flexDirection: 'column',
		justifyContent: "space-around"
	},
	headerTextStyle: {
		fontSize: 18,
	},	
	thumbnailStyle: {
		height: 50, 
		width: 50,
	},
	thumbnailContainerStyle: {
		justifyContent: "center",
		alignItems: "center",
		marginLeft: 10,
		marginRight: 10
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
}

export default AlbumDetail;
