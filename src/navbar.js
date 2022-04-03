import { View, Text, StyleSheet } from 'react-native';

export const Navbar = props => {
    return (
        <View style={styles.navbar}>
            <Text style={styles.text}>{props.title}</Text>
        </View>     
    )
};

const styles = StyleSheet.create({
    navbar: {
        height: 70,
        justifyContent: 'flex-end',
        alignItems: 'center',        
        backgroundColor: 'blue',
        paddingBottom: 10
    },
    text :{ color: 'white'}
})