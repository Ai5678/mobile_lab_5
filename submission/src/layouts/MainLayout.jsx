import { StyleSheet, View } from 'react-native'
import React from 'react'
import Footer from '../Components/Footer';

const MainLayout = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
            <Footer/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
export default MainLayout;