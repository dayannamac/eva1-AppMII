import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    inputs: {
        width: '90%'
    },
    textHead: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    button: {
        width: '90%',
        marginTop:15,
        backgroundColor:'#000'
    },
    textRedirect: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },
    rootHome: {
        flex: 1,
        marginVertical: 60,
        marginHorizontal: 25
    },
    headerHome: {
        alignItems: 'center',
        justifyContent:'center'
    },
    itemContainer: {
        padding: 16,
        marginVertical:25,
        alignItems:'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    itemText: {
        fontSize: 25,
    },
    listContent: {
        paddingBottom: 16,
    },
    totalContainer: {
        padding: 16,
        borderTopColor: '#ccc',
        alignItems: 'center',
    },
    totalText: {
        fontSize: 28,
        fontWeight: 'bold',
    },
})