import {useState} from 'react'
import './style.css'

const Fruits = ()=>{

    const [fruits, setFruits] = useState([
        { name: "banana", color: "yellow", price: 2 },
        { name: "cherry", color: "red", price: 3 },
        { name: "strawberry", color: "red", price: 4 },
       ]);

    const totalPrice = fruits.reduce((valorInicial, valorAtual)=>(valorInicial + valorAtual.price),0)

        const filterRedFruits = ()=>{
        const fruitsOutput = fruits.filter((item)=>(item.color === 'red'))
        setFruits(fruitsOutput)
    }

       return(
        
        <>
        <h3>Preço Total: {totalPrice}</h3>
        {fruits.map((item)=>(
            <li>{item.name}</li>
            ))}
        <button onClick={filterRedFruits} className='buttonStyle'>Mostrar Frutas Vermelhas</button>
       </>
       
       )
}



export default Fruits   