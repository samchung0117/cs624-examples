// Listing 4.13 Relative and absolute positioning comparison
import React, { Component } from 'react';
import { StyleSheet, Text, View} from 'react-native';

/*
    Row containing blocks A, B, and C
    
    Block E is absolutely positioned in the lower-right corner of its parent container, block B.
    
    Block D is absolutely positioned in the lower-right corner of its parent container.
*/
export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <Example>
                        <CenteredText>A</CenteredText>
                    </Example>
                    <Example>
                        <CenteredText>B</CenteredText>
                        <View style={[styles.tinyExample,
                                     {position: 'absolute',
                                      right: 0,
                                      bottom: 0}]}>
                            <CenteredText>E</CenteredText>
                        </View>
                    </Example>
                    <Example>
                        <CenteredText>C</CenteredText>
                    </Example>
                </View>
                <Example style={{position: 'absolute',
                                 right: 0, bottom: 0}}>
                    <CenteredText>D</CenteredText>
                </Example>
            </View>
        );
    }
}

const Example = (props) => (
    <View style={[styles.example,props.style]}>
        {props.children}
    </View>
);

const CenteredText = (props) => (
    <Text style={[styles.centeredText, props.style]}>
        {props.children}
    </Text>
);

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 300,
        margin: 40,
        marginTop: 100,
        borderWidth: 1
    },
    /*
        The flexbox direction is specified as row, so the blocks are in a row across the screen.
    */
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    example: {
        width: 100,
        height: 100,
        backgroundColor: 'grey',
        borderWidth: 1,
        justifyContent: 'center'
    },
    /*
        Width and height to 40 from 30 for better display
    */
    tinyExample: {
        width: 40,
        height: 40,
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'lightgrey'
    },
    centeredText: {
        textAlign: 'center',
        margin: 10
    }
});