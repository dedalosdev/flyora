import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';


interface HeaderProps {
    title: string;
    showBackButton?:boolean;    
}

export function Header({title, showBackButton = false}:HeaderProps) {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {showBackButton && (
                <TouchableOpacity onPress={() => router.navigate('/')} style={styles.button}>
                  <Ionicons name="arrow-back" size={20} color="#FFF" />
                </TouchableOpacity>
            )}
            
            <Text style={styles.title} numberOfLines={1}>{title}</Text>   
            
        </View>
    )    
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 4,
    marginTop:35
  },
  button: {
    padding: 0,
  },
  title: {
    color: '#FFF',
    fontSize: 30,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  placeholder: {
    width: 24,
  },
});
