

const Challenge = () => {
    const number1 = 12;
    const number2 = 88;

    return (
       <div>
        <h1>
           Número 1:  {number1}
            <br/>
           Número 2:  {number2}
        </h1>   
        <div>
            <button name="Somar" type="submit" onClick={() => console.log(number1 + number2)}>Somar números:</button>
        </div>            
       </div>
    );
};

export default Challenge;