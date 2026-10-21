import { Image, Text, View, StyleSheet } from 'react-native';
import QRCode from "react-native-qrcode-svg";
import Svg, { Line, Circle } from "react-native-svg";
import { Ionicons } from "@expo/vector-icons";

import { Flight } from "../components/flight";
import { colors } from '../styles/colors';
import { Info } from "../components/info";
import { Header } from '../components/Header';

import { fontFamily } from "../styles/fontFamily";


export default function Index() {

    return (
        <View style={styles.container}>
            <Image style={StyleSheet.absoluteFill} resizeMode='cover' source={require("@/assets/cover.png")} />
            <Header title="Flyora" showBackButton={true} />
            <View style={styles.onboarding}>
                <Text style={styles.title}>Onboarding Pass</Text>
                <Text style={styles.subtitle}>There are 45 days left until your trip.</Text>
            </View>
            
            <View style={styles.ticket}>
                <View style={styles.content}>
                    <View style={styles.flight}>
                        <Flight label="São Paulo" value="GRU" />
                        <View style={styles.duration}>
                            <Ionicons name="airplane-sharp" size={32} color={colors.black} />
                            <Text style={styles.hours}>9h 45 min</Text>
                        </View>
                        <Flight label="Nova York" value="JKF" />
                    </View>

                    <Text style={styles.label}>Passenger</Text>
                    <Text style={styles.name}>Alastor Junqueira</Text>

                    <View style={styles.details}>
                        <View style={styles.inline}>
                            <Info label="Date" value="November 17" />
                            <Info label="Departure" value="17:25" />
                        </View>
                    </View>
                </View>

                <View>
                    <Svg height={20} width="100%">
                        <Line x1="0%" y1="50%" x2="100%" y2="50%" stroke={colors.gray[800]} strokeWidth={1} strokeDasharray="5,5" />
                        <Circle r={8} cx="0%" cy="50%" fill={colors.black} />
                        <Circle r={8} cx="100%" cy="50%" fill={colors.black} />
                    </Svg>
                </View>

                <View style={styles.footer}>
                    <View style={styles.footerContent}>
                        <View style={styles.inline}>
                            <Info label="Flight" value="YZ 607" />
                            <Info label="Seat" value="296" />
                        </View>

                        <View style={styles.inline}>
                            <Info label="Terminal" value="3" />
                            <Info label="Gate" value="39" />
                        </View>

                    </View>
                    
                    <QRCode value="boarding code" size={130} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  onboarding: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
  },
  header:{
    width:"100%",
    flex: 1,
    alignItems:"center",
    justifyContent:"center",
  },

  title:{
    color:colors.white,
    fontSize:24,
    fontFamily: fontFamily.extrabold,
  },

  subtitle:{
    color:colors.white,
    fontSize:14,
    fontFamily: fontFamily.medium,
  },

  ticket:{
    backgroundColor:colors.white,
    width:"100%",
    borderRadius:22,
    overflow:"hidden",
    paddingBottom:24,
  },

  content:{
    padding:20,
  },

  flight:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:52,
  },

  duration:{
    alignItems:"center",
  },

  hours:{
    color:colors.gray[800],
    fontSize: 14,
    fontFamily: fontFamily.regular,
  },

  label:{
    color:colors.gray[800],
    fontSize: 12,
    textTransform:"uppercase",
    fontFamily: fontFamily.regular,
  },

  name:{
    color:colors.black,
    fontSize: 24,
    fontFamily: fontFamily.bold,
  },

  details:{
    marginTop:52,
  },

  inline:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-between",
  },

  footer:{
    width:"100%",
    padding:20,
    flexDirection:"row",
    gap:22,
  },
  
  footerContent:{
    flex:1,
    gap:24,
  },

});