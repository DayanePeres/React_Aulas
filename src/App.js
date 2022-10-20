import './App.css';
import {useState} from 'react';


import Challenge from "./Components/Challenge";
import ImagemTeste from "./assets/img2.jpg"
import ManageData from "./Components/ManageData";
import ListHender from "./Components/ListHender";
import ConditionalRender from './Components/ConditionalRender';
import ShowUserName from './Components/ShowUserName';
import CarDetails from './Components/CarDetails';


function App() {

  /* Usando Props */
//const name = "Heitor Peres, o mais lindo";
const [userName] = useState("Heitor, o mais lindo, maravilhoso, amor da minha vida, te amooooo");
/* FIM Usando Props */

const cars = [
  {id: 1, brand:"Ferrari", color:  "VERDE", newCar: true, km: 0},
  {id: 2, brand:"Kia", color:  "BRANCO", newCar: false, km: 12340},
  {id: 3, brand:"Jeep", color:  "Cinza", newCar: true, km: 12550},
  {id: 4, brand:"Gol", color:  "Preto", newCar: false, km: 0},
  {id: 5, brand:"Celta", color:  "green", newCar: false, km: 10000},
  ]

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
          <CarDetails brand={car.brand} km={car.km} color={car. color} newCar={car.newCar}/>
        ))
      }
      
    </div>
  );
}

export default App;
