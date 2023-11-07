import React from 'react';
import { Platform, View } from 'react-native';
import NativeNavigation from './NativeNavigation';
import WebNavigation from './WebNavigation';

function Main() {
    const navigator = Platform.OS == 'web' ? <WebNavigation /> : <NativeNavigation />;
    return <View style={{ flex: 1, margin: 3, fontFamily: 'AmericanTypewriter' }}>{navigator}</View>;
}

export default Main;
