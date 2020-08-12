import React from 'react';
import { StyleSheet, Text, ScrollView, Image, DrawerLayoutAndroidBase} from 'react-native';

const aboutApp = `Lorem ipsum dolor sit amet`;
const whatApp = `Lorem ipsum dolor sit ament`


export class About extends React.Component {
    static navigationOptions = {
        header: null
    }

    render(){
        return (
            <ScrollView style={StyleSheet.container}>
                <Image style={styles.pics} source={require('../sections/img/lotus.png')} />
                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutApp}</Text>
                <Image style={styles.pics} source={require('../sections/img/lotus.png')} />
                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatApp}</Text>
                <Text onPress={()=> this.navigation.goBack()} style={styles.backButton}>Go Back</Text>
            </ScrollView>
        )
    }
}

constTyles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
})