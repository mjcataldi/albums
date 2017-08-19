import React from 'react'
import { Text, View } from 'react-native'

// Make a Component

const Header = (props) => {
  // const { viewStyle, titleStyle, mainTextStyle } = styles;

  return (
    <View style={ styles.viewStyle }>
      <Text style={ styles.titleStyle }>{props.headerText}</Text>
      <Text style={ styles.mainTextStyle }>Some more text is here</Text>
    </View>
  );
};

const styles = {
  titleStyle: {
    fontSize: 35
  },

  mainTextStyle: {
    fontSize: 15
  },

  viewStyle: {
    height: 100,
    paddingTop: 25,
    backgroundColor: '#b3e6ff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative'
  }
};


// Make the Component availabe to other parts of the app
// export it vs. root which is registered with AppRegistry

export default Header;


