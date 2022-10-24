import React from 'react'

const ChangeMessageState = ({handleMessage}) => {

const message = ["oi", "olá", "oi, td bem?", "eAeeee", "Hellou"]

  return (
    <div>
        <button onClick={() => handleMessage(message[0])}>0</button>
        <button onClick={() => handleMessage(message[1])}>1</button>
        <button onClick={() => handleMessage(message[2])}>2</button>
        <button onClick={() => handleMessage(message[3])}>3</button>
        <button onClick={() => handleMessage(message[4])}>4</button>
    </div>
  )
}

export default ChangeMessageState