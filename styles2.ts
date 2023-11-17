import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#161616'
    },
    

    header: {
        backgroundColor: '#06077C',
        padding: 20,
        alignItems: 'center',
        borderRadius: 12,
    },
    textHeader: {
        marginTop: 40,
       
    },
    textList: {
        textAlign: 'center',
        marginLeft: 250,
        marginTop: 25
    },
    
    icon: {
    position: 'absolute',
    },
    invoices: {
       padding: 0,
       marginTop: 30,
       flex: 1
        
    },
    invoicelist:{
        backgroundColor: '#202020',
        borderRadius: 12,
        padding: 35,
        flexDirection: 'column',
        marginTop: 5,
        marginHorizontal: 15
        
    },
    date:{
        color: '#F3E5F5'
    },
    quit:{
        color: '#00E676',
        position: 'absolute',
        // textAlign: 'left',
        marginLeft: 250,
        marginBotton: 50
    },
    value: {
        fontSize: 24,
        color: '#C1AFC1'
    }
})