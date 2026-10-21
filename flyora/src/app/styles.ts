import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    header:{
        width:"100%",
        flex: 1,        
    },
    container: {
        flex: 1,
        alignItems:"center",
        justifyContent:"center",
    },    
    title: {
        fontSize:32,
        fontWeight:900,
        color:"#fff",
    },
    subtitle: {
        fontSize:16,
        color:"#fff",
    },
    form:{
        marginTop:24,
        gap:12,
        width:"90%",
    },
    footerText:{
        textAlign: "center",
        marginTop:24,
        color:"#fff"
    },
    footerLink:{
        color:"#fff",
        fontWeight:700,
    }
})