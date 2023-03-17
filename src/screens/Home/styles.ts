import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: '#FDFCFE',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },
    input: {
        backgroundColor: '#1F1E25',
        height: 56,
        borderRadius: 10,
        color: '#FDFCFE',
        padding: 16,
        fontSize: 18,
        flex: 1,
        marginRight: 12
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 10,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    buttonText: {
        color: '#FFF',
    },
    listEmpty: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: 18
    }
})