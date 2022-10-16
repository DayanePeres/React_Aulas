import {useState} from 'react';

const ManageData = () => {
    let somData = 10;
    const [number, setNumber] = useState(11);
    
    console.log(number);
    return (
        <div> ManageData
            <div>
                <p>Valor: {somData}</p>
                <button onClick={() => somData = 15}>Mudar Variável</button>
            </div>
            <div>
                <p>Valor State: {number}</p>
                <button onClick={() => setNumber(115)}>Mudar Variável state</button>
            </div>
        </div>
    )
};

export default ManageData;