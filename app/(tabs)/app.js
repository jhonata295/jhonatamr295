import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

class App extends Component {
render() {
return (
<ScrollView style={styles.container}>
<Text style={styles.titulo}>
 Brasileiro Série A
</Text>

<CardTime
nomeTime="Nome: São Paulo                         Ano: 1930"
escudo="https://clubedosfanaticos.wordpress.com/wp-content/uploads/2011/12/sao-paulo.jpg?w=584"
/>

<CardTime
nomeTime="Nome: Vasco                               Ano: 1898"
escudo="https://mercadohoje.uai.com.br/wp-content/uploads/2022/02/venda-vasco-1280x720.jpg"
/>
</ScrollView>
);
}
}

class CardTime extends Component {
render() {
return (
<View style={styles.cardTime}>

<Image
source={{ uri: this.props.escudo }}
style={styles.imagemEscudo}
/>
<Text style={styles.nomeTime}>{this.props.nomeTime}</Text>
</View>
);
}
}

const styles = StyleSheet.create({
container: {
backgroundColor: "#e8f5e9",
paddingTop: 20,
paddingLeft: 15,
paddingRight: 15,
},
titulo: {
fontFamily: 'Inter_700Bold',
color: '#004d40',
fontSize: 30,
textAlign: 'center',
marginBottom: 20,
},
cardTime: {
marginBottom: 20,
borderRadius: 10,
backgroundColor: 'white',

elevation: 5,
shadowColor: '#000',
shadowOpacity: 0.2,
shadowOffset: { width: 0, height: 2 },
shadowRadius: 5,
overflow: 'hidden',
},
imagemEscudo: {
width: '100%',
height: 200,
borderRadius: 10,
},
nomeTime: {
fontFamily: 'Inter_400Regular',
fontSize: 20,
color: '#004d40',
textAlign: 'center',
padding: 10,
fontWeight: 'bold',
},
});

export default App;