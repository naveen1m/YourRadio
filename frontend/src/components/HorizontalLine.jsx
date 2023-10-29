import React from 'react';
import { View, StyleSheet } from 'react-native';

const HorizontalLine = () => {
    return <View style={styles.line} />;
};

const styles = StyleSheet.create({
    line: {
        borderBottomColor: 'black',  // Change the color as desired
        borderBottomWidth: 1,        // Change the width as desired
    },
});

export default HorizontalLine;
