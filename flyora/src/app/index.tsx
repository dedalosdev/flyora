import { View, Image, Text, ScrollView, KeyboardAvoidingView, Platform, Alert, StyleSheet } from "react-native";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { styles } from "./styles";


export default function Index() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter();

    function handleSignIn() {
        if (!email.trim() || !password.trim()) {
            return Alert.alert("Sign in", "Fill all the form fields.")
        }        
        return router.navigate('/onboardingpass');
    }

    return (
        <KeyboardAvoidingView style={{flex:1}} behavior={Platform.select({ios:"padding", android:"height"})}>
            <Image style={StyleSheet.absoluteFill} resizeMode='cover' source={require("@/assets/cover.png")} />
                <ScrollView contentContainerStyle={{flexGrow:1}} keyboardShouldPersistTaps="handled">
                    <Header title="Flyora" />
                    <View style={styles.container}>
                        <Text style={styles.title}>Sign In</Text>
                        <View style={styles.form}>
                            <Input placeholder="E-mail" keyboardType="email-address" onChangeText={setEmail} />
                            <Input placeholder="Password" secureTextEntry onChangeText={setPassword} />
                            <Button label="Sign in" onPress={handleSignIn} />
                        </View>
                        <Text style={styles.footerText}>
                            New to the app?{" "}
                            <Link href="/signup" style={styles.footerLink}>Register here.</Link>
                        </Text>  
                    </View>
                </ScrollView>
        </KeyboardAvoidingView>
    )
}
