import React from 'react'

const UserDetails = ({id, name, idade, profissao}) => {
    
  return (
    <div>
        <h1>Desafio!!!</h1>
        <ul>
            <li>ID: {id}</li>
            <li>Nome: {name}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        {idade >= 18 && <p>Permitido tirar habilitação!</p>}
        {idade < 18 && <p>Não Permitido tirar habilitação!</p>}
    </div>
  );
};

export default UserDetails;