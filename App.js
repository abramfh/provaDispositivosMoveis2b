import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image } from 'react-native';
import { Card,RadioButton,Button } from 'react-native-paper';

const App = () => {
return (

<SafeAreaView style={styles.container}>
<View style={styles.header}>
<Text style={styles.headerTitle}>Finalizar Pedido</Text>
</View>
<View style={styles.container}>

<Card style={styles.card}>
<Text style={styles.text1}>
  Restaurante FoodCode
</Text>
<Text style={styles.text2}>
  Av. Curitiba 5km
</Text>
</Card> 

<Card style={styles.card}>
<Text style={styles.text1}>
  Entregar em:
</Text>
<Text style={styles.text2}>
  Av. Guedner 1298
</Text>
<Text style={styles.text2}>
  Tempo de entrega 60 - 90 min
</Text>
</Card>

<Card style={styles.card}>
<Text style={styles.text3}>
  Meu pedido
</Text>
<View style={styles.cardFood}>
<Image style={styles.prato} source={require('./comida.png')} />
<Text style={styles.text2}>
  Combo de Coxinha 
</Text>
<Text style={styles.text2}>
  R$25,00
</Text>
</View>
</Card> 

<Card style={styles.card}>
<Text style={styles.text3}>
  Pagamento
</Text>
<View style={styles.cardFood}>
<Text style={styles.text2}>
  Subtotal:
</Text>
<Text style={styles.text2}>
  R$20,50
</Text>
</View>
<View style={styles.cardFood}>
<Text style={styles.text2}>
  Taxa de entrega:
</Text>
<Text style={styles.text2}>
  R$6,00
</Text>
</View>
<View style={styles.cardFood}>
<Text style={styles.text2}>
  Total:
</Text>
<Text style={styles.text2}>
  R$26,50
</Text>
</View>
</Card> 


<Card style={styles.card}>
<Text style={styles.text3}>
  Forma de pagamento
</Text>
<View style={styles.cardFood}>
<Text style={styles.text2}>
  Cartão de crédito:
</Text>
<Text style={styles.text2}>
    <RadioButton
value="cartao"
status='checked'
/>
</Text>
</View>
<View style={styles.cardFood}>
<Text style={styles.text2}>
  Vale alimentação:
</Text>
<Text style={styles.text2}>
<RadioButton  value="vale" style={{scale:0.5}} />
</Text>
</View>
</Card> 
</View>

<View style={styles.footer}>
<Button style={styles.button} mode="contained" >
Confirmar R$26,50
</Button>
</View>
</SafeAreaView>
);
};

export default App;

const styles = StyleSheet.create({
header: {
textAlign:"center",
backgroundColor:"white",
padding:20,
},
footer: {
textAlign:"center",
backgroundColor:"white",
padding:20,
},
headerTitle: {
fontSize:20,
fontWeight:"bold"
},
cardFood: {
flexDirection:"row"

},
card: {
marginBottom:10,

},
prato:{
width:50,
height:50,
marginLeft:10,
marginBottom:10
},
container: {
flex: 1,
justifyContent: 'top',
padding: 20,
backgroundColor: '#ecf0f1',
},
text1: {
fontSize: 12,
fontWeight: 'bold',
textAlign: 'center',
padding: 10,
textAlign:"left"
},
text2: {
fontSize: 11,
fontWeight: 'normal',
textAlign: 'left',
paddingLeft: 10,
paddingBottom:5,
width:"100%",
flex:1,
alignItems:"stretch"
},
text3: {
fontSize: 14,
fontWeight: 'bold',
textAlign: 'left',
padding: 10
},
button: {
backgroundColor:"#4C9DE8",

}
});
