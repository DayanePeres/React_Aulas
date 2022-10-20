import {useState} from 'react';
const ConditionalRender = () => {
    const [x] = useState(true);
    const [name, setName] = useState("João");

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se X for true;</p>}

        <h1>IF Ternário</h1>
        {name === "João" ? (
            <div>
             <p>O nome é João</p>    
            </div>
        ) : (
            <div>
             <p>O nome não é João</p>    
             </div>
        )}

        <button type="button" onClick={() => setName("Day")}>Clique para alterar</button>
    </div>
  );
};

export default ConditionalRender