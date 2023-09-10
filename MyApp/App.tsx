import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {

    const profilePicture = require('../images/slack_profile_pic.jpg');
    
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
            <Text>David Ifebueme</Text>
            <Image
                source={profilePicture}
                style={{ width: 100, height:100, borderRadius:50 }}
            />
            <Button
                title="Open Github"
                onPress={() =>{
                    return(
                        <WebView
                            source={{uri: 'https://github.com/DavidIfebueme'}}
                            //style={webViewStyles}
                        /> 
                    );
                }}
            />
        </View>         

    );
};

export default App;
