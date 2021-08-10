import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment} from './counterSlice'

export function Counter(){
const dipactch = useDispatch();
const count = useSelector((state)=>state.counter.value)
const colorChange= useSelector((state)=>state.counter.color)
    return(

        <div>
            <button onClick={()=>dipactch(increment())} > Sumar Valor</button>
            <button style={{backgroundColor:colorChange}}>Cambiar Color</button>
        
            <p>{count}</p>
        </div>
    )
}
