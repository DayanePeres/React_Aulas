import './App.css';
import {useState} from 'react';


import Challenge from "./Components/Challenge";
import ImagemTeste from "./assets/img2.jpg"
import ManageData from "./Components/ManageData";
import ListHender from "./Components/ListHender";
import ConditionalRender from './Components/ConditionalRender';
import ShowUserName from './Components/ShowUserName';
import CarDetails from './Components/CarDetails';
import Fragment from './Components/Fragment';
import Container from './Components/Container';
import ExecuteFunction from './Components/ExecuteFunction';
import Message from './Components/Message';
import ChangeMessageState from './Components/ChangeMessageState';
import UserDetails from './Components/UserDetails';


function App() {

  /* Usando Props */
//const name = "Heitor Peres, o mais lindo";
const [userName] = useState("Heitor, o mais lindo, maravilhoso, amor da minha vida, te amooooo");
/* FIM Usando Props */

const pessoas = [
  {
      id: 1,
      name: 'Dayane Peres',
      idade: 28,
      profissao: "Engenheira de Software"
  },
  {
      id: 1,
      name: 'Heitor Peres',
      idade: 17,
      profissao: "Cientista de Software"
  },
  {
      id: 1,
      name: 'Gabiel Jesus',
      idade: 28,
      profissao: "Analista de Software"
  }
]

const cars = [
  {id: 1, brand:"Ferrari", color:  "VERDE", newCar: true, km: 0},
  {id: 2, brand:"Kia", color:  "BRANCO", newCar: false, km: 12340},
  {id: 3, brand:"Jeep", color:  "Cinza", newCar: true, km: 12550},
  {id: 4, brand:"Gol", color:  "Preto", newCar: false, km: 0},
  {id: 5, brand:"Celta", color:  "green", newCar: false, km: 10000},
  ]

  function showMessage(){
    console.log("Teste Função - Componente pai");
  }

  const[message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <Challenge/>
          
      <h1>Avançando em React</h1>
      {/*Imagem publica*/}
      <div>
        <img  src="img1.jpg"  alt="paisagem" />
      </div>
     
      {/*Imagem asserts */}
      <div>
       <img  src={ImagemTeste} alt="paisagem" />
      </div>

      <ManageData/>
      <ListHender/>
      <ConditionalRender/>
      <ShowUserName name={userName}/> {/* Usando Props */}
      <CarDetails brand="VW" km={10000} color={"azul"} newCar={false}/> {/* Destruction pops */}
      <CarDetails brand="Ford" km={0} color={"Vermelha"} newCar={true}/> {/* Destruction pops */}

      {/* Loop Array */}
      {
        cars.map((car) => (
          <CarDetails
                     key={car.id}
                      brand={car.brand} 
                      km={car.km} 
                      color={car.color} 
                      newCar={car.newCar}/>
        ))
      }
      
      {/*Fragments*/}
      <Fragment propFragment="test"/>

      {/*Children prop*/}
      <Container children="test 1">
        <p>Este é o conteúdo em app - Teste 1 </p>
      </Container>

      <Container myValue="test 2">
        <h5>Este é o conteúdo em app - Teste 2 </h5>
      </Container>

       {/*Executar função*/}
       <ExecuteFunction myFunction={showMessage}/>

       {/*state lift*/}
       <Message msg={message}/>
       <ChangeMessageState handleMessage={handleMessage}/>

       {/*Desafio*/}
       {
        pessoas.map((item) => (
          <UserDetails key={item.id}
                       id={item.id}
                       name={item.name}
                       idade={item.idade}
                       profissao={item.profissao} />
                  
       ))}
       <UserDetails />
    </div>
  );
}

export default App;
