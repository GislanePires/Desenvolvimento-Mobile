import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

    },
    image: {
        flex: 1,
        justifyContent: 'center',
        // opacity: 0.3
    },
    
    logo: {
        display: 'flex',
        // paddingTop: 10,
        width: 460,
        height: 260,
        marginBottom: -135,
        marginTop: 40,
        marginLeft: 50,
        marginRight: 195,
        alignItems: 'center',
        
    },
    inputArea: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginBottom: 20,
        backgroundColor: '#212121',
        padding: '10%',
        marginLeft: '5%',
        // marginRight: '10%',
        borderRadius: 14,
        marginTop: 45
    },
    input: {
        backgroundColor: '#424242',
        borderRadius: 7,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginBottom: 20,
        fontSize: 16,
        height: 40,
        width:300
    
    },
    Cnpj: {
        fontSize: 12,
            //    textAlign: 'left',
        marginRight: 208,        
        marginBottom:5,
        color: '#FCE4EC',
    },
    Senha:{
        fontSize: 12,
        marginRight: 230,        
        marginBottom:5,
        color: '#FCE4EC'
    },

    icon: {
        position: 'absolute',
        top: 155,
        right: 20,
        // height: 10,
        width: '15%',
        
    },
    loginButton: {
        backgroundColor: '#06077C',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        width:300,
        // borderRadius: 7, //......?.....
        heigth: 40
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textConfirm: {
        color: '#FCE4EC',
        fontSize: 16,
        marginBottom: 10,
        marginTop: 10
    },
    textpass: {
        color: '#FCE4EC',
        fontSize: 16,
    }
})