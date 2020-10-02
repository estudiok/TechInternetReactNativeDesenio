// //-----------------APP JS
// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import ListaAlumnos from './componentes/lista-alumnos';

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text style={styles.blancoModificado}>Bienvenido a Tecnologias En Internet</Text>
//     //   <StatusBar style="auto" />
//     // </View>
    
//     <ListaAlumnos/>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   blancoModificado: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },
// });


import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert} from 'react-native';

export default function App() {
// const App = () => {
  return (
    <ScrollView>
      
      <Text style={{ fontSize: 30}}>    CATCHOW</Text>
      <Text style={{ fontSize: 20 }}>            LOGIN</Text>
      
      <View>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ 
            width: 200, 
            height: 200
          }}
        />
      </View>
      
      <TextInput
        style={{

          marginBottom: 10,
          height: 40,
          width: 220,
          borderColor: 'gray',
          borderWidth: 1
        }}
        // defaultValue="Usuario"
        placeholder="Usuario"
      />
      
      <TextInput
        style={{
          height: 40,
          width: 220,
          borderColor: 'gray',
          borderWidth: 1
        }}
        // defaultValue="Contraseña"
        placeholder="Contraseña"
      />

      <View style={{width: 220, height: 200, marginTop: 9}}>
        <Button
          title="ENVIAR"
          color="#2B60DE"
          accessibilityLabel="Tap to Decrypt Data"
          onPress={() => {
            Alert.alert('You tapped the Decrypt button!');
          }}
        />
      </View>

      {/* <Button 
        // onPress={onPressLearnMore}
        title="Enviar"
        // color="#841584"
        // accessibilityLabel="Learn more about this purple button"
      /> */}

    </ScrollView>

    );
}

// export default App;
