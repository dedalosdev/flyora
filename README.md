# flyora
Flyora is an open-source flight boarding pass app built with React Native and Expo. It features dynamically generated QR codes and SVG-powered boarding pass designs, making it ideal for learning, personal use, and building commercial applications.


# instalation instructions
npx create-expo-app --template

Choose a template: Blank (Typescript)

What is your app named? › flyora

Select an Expo SDK version: › Latest (SDK 57)

You are creating a project inside of an existing Git repository. Skip initializing a new git repository? … yes

cd flyora

npx expo install react-native-qrcode-svg

npx expo install react-native-svg

npx expo install expo-font @expo-google-fonts/poppins

# run application
npx expo start

type 'a' key to run android emulator