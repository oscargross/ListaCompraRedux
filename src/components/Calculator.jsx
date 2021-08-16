import React, {useState} from 'react'
// import { connect } from 'react-redux'
import {useSelector, useDispatch} from 'react-redux'
import { sum, sub } from './../store/Calculator/Calculator.actions';
import { calculatorSelect } from './../store/selectors';

 function Calculator () {
    const [a, setA] = useState()
    const [b, setB] = useState()



    const dispatch = useDispatch()

        const result = useSelector(calculatorSelect)

    return (<div>
            <input type='number' value={a} onChange={(e) => setA(Number(e.target.value))} placeholder='a'></input>
            <input type='number' value={b} onChange={(e) => setB(Number(e.target.value))} placeholder='b'></input>
            <button onClick={() => {
                dispatch(sum(a,b))
            }}>Somar</button>

            <button onClick={() => {
                dispatch(sub(a,b))
            }}>Subtrair</button>

            <div>{result}</div>

        </div>)    
}

export default Calculator

// function mapStateToProps (state){
//     return{
//         result : state.calculator
//     }
// }

// export default connect(mapStateToProps)(Calculator)