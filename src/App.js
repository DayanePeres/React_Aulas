import './App.css';
import Challenge from "./Components/Challenge";
import ImagemTeste from "./assets/img2.jpg"
import ManageData from "./Components/ManageData";
import ListHender from "./Components/ListHender";

function App() {
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
    </div>
  );
}

export default App;
