import { View, Image, Text, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Link } from "expo-router";
import { Header } from "@/components/Header";
import { styles } from "./styles";


export default function Index() {

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.select({ios:"padding", android:"height"})}>
            <Image style={StyleSheet.absoluteFill} source={require("@/assets/cover.png")} />
            <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                <Header title="Flyora" />
                <View style={styles.container}>
                    <Text style={styles.title}>Register</Text>
                    <Text style={styles.subtitle}>Create your account to sign in.</Text>
                    <View style={styles.form}>
                        <Input placeholder="Full name" />
                        <Input placeholder="E-mail" keyboardType="email-address" />
                        <Input placeholder="Password" secureTextEntry />
                        <Input placeholder="Confirma password" secureTextEntry />
                        <Button label="Cadastrar" />
                    </View>
                    <Text style={styles.footerText}>
                        Already registered?{" "}
                        <Link href="/" style={styles.footerLink}>Sign in here.</Link>
                    </Text>  
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )    
}
