import {StatusBar} from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FaCheckCircle, FaTrash, FaPen} from 'react-icons/fa';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/css/bootstrap.css' ;
import {ListGroupItemHeading} from 'reactstrap';
import { SignIn } from './src/screens/SignIn';
//import { useEffect } from 'react/cjs/react.production.min';//

//comandos para adicionar ao servidor:

const express = require('express');
const app = express();

app.get('/', (request, response) {
  return response.json({message:'Server is up'});
})

app.post('/teste', (request, response) {
  const {name,date} = request.body;

  return response.json({name,date});
})


app.listen(3000)

//

function App(){
  const[lista, setLista]=useState([]);
  const[nome, setNome]=useState('');
  const[email, setEmail]=useState('');
  const[senha, setSenha]=useState('');
  const[id, setId]=useState('');

  useEffect(()=>{
    listarDados();
  },[])

  async function listarDados(){
    const res= await axios.get('http://localhost/apireact/listar.php');
    setLista(res.data);
    console.log(res.data);
  }

/*
const YourApp = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>
        Mini-me! 
      </Text>
    </View>
  );
}*/

  return (
    <div>
    Teste
    </div>
  )
}

export default App;
