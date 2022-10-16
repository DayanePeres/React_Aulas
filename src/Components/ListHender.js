import {useState} from 'react'

const ListHender = () => {
    const [list] = useState(["Day", "Month", "Year"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Day", agr: 28},
        { id: 2, name: "Heitor", agr: 0.8},
        { id: 3, name: "Dani", agr: 26},
        { id: 4, name: "Amanda", agr: 21},
        { id: 5, name: "Rafa", agr: 19},
    ]);
        
    const deleteRandom = () => {

        const randomIndex = Math.floor(Math.random() * users.length);
        
        /*
        - PreviousState: 
            - permite pegar valor original de um dado dentro do set de dado.
            - utilizado para modificar listas, pois temos valores antigos e transformaremos em novos valores.
            - primeiro argumento de um set sempre será previous State;
        */
        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => user.id !== randomIndex);
        });
    };

  return (
    <div>
        <ul>
        {list.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
        </ul>
        <ul>
            {users.map((user, index) => (
                <li key={user.id}> 
                 {user.name} - {user.agr}
                </li>))}
        </ul>
        
        <button onClick={deleteRandom}>Delete Random user</button>
    </div>
  );
};

export default ListHender;