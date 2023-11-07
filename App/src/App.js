import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

{/*import Comp, { Comp2, Comp3 } from './Components/Multiplos';
import Primeiro from './Components/Primeiro';
import MixMax from './Components/MixMax';
import Aleatorio from './Components/Aleatorio';
import Botao from './Components/Botao';
import Titulo from './Components/Titulo';
//import Contador from './Components/Contador';
//import Pai from './Components/Indireta/Pai'
//import ContadorV2 from './Contador/ContadorV2';
//import Diferenciar from './Components/Diferenciar';
import Familia from './Components/relacao/Familia'
import Membros from './Components/relacao/Membros'
import UsuarioLogado from './Components/UsuarioLogado';
//import ParImpar from './Components/ParImpar';*/}
//import ListaProdutosV2 from './Components/Produtos/ListaProdutosV2';
//import DigiteSeuNome from './Components/DigiteSeuNome';
//import Quadrado from './Components/Layout/Quadrado';
//import FlexboxV1 from './Components/Layout/FlexboxV1';
//import FlexboxV2 from './Components/Layout/FlexboxV2';
import FlexboxV3 from './Components/Layout/FlexboxV3';

export default function App() { 
  return (
    <SafeAreaView style={styles.container}>

      <FlexboxV3/>



      {/*<Titulo principal="Titulo" secundario="Subtitulo"/>
      <DigiteSeuNome/>
      <ListaProdutosV2/>
      <Familia>
      <UsuarioLogado usuario={{nome: "Fernanda", email:"fe@gmail.com"}}/>
      <UsuarioLogado usuario={{nome: "Luisa", }}/>
      <UsuarioLogado usuario={{email: "contato@google.com", }}/>
      <UsuarioLogado usuario={{ }}/>
     
      <Membros nome="Luisa" sobrenome="Silva"/>
      <Membros nome="Arthur" sobrenome="Silva"/>
      </Familia>
      <Familia>
        <Membros nome="Eduardo" sobrenome="Carvalho"/>
      </Familia>
      <ParImpar/>
      <Diferenciar/>
      <ContadorV2/>
      <Pai/>
      <Contador inicial={100} passo={2}/>
      <Contador/>
      <Botao/>
      <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
    <Aleatorio min={1} max={60}/>
      <MixMax min={2} max={20 }/>
      <MixMax min={15} max={65 }/>
      
      <Comp />
      <Comp2 />
      <Comp3 />
  <Primeiro />*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
