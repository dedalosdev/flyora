import { ImageBackground, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import QRCode from "react-native-qrcode-svg";
import Svg, { Line, Circle } from "react-native-svg";
import { styles } from "./styles";
import { Flight } from "@/components/flight";
import { colors } from '@/styles/colors';
import { Info } from "@/components/info";


export function Home() {
  return (
    <View style={styles.container}>
        <ImageBackground style={styles.header} source={require("@/assets/cover.png")}>
            <Text style={styles.title}>Flyora</Text>
            <Text style={styles.subtitle}>There are 45 days left until your trip.</Text>
        </ImageBackground>

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
  );
}

