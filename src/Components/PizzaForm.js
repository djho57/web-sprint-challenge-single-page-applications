import React, { useState, useEffect} from 'react';
// import reactDom from 'react-dom';
import axios from 'axios';
import schema from '../validation/FormSchema';
import * as yup from 'yup';

// const initialFormVals = {
//     name: '',
//     size: '',
//     sauce: ['red', 'white'],
//     cheese: ['parmesan', 'mozzarella'],
//     toppings: ['pepperoni', 'sausage', 'chicken', 'bacon', 'beef', 'olives', 'mushrooms', 'bell peppers', 'jalapenos', 'arugula'],
//     special: '',
//   }

export default function PizzaForm(){

    const [ formVals, setFormVals ] = useState({
        name: '',
        size: '',
        white: false,
        red: false,
        parmesan: false,
        mozzarella: false,
        pepperoni: false,
        sausage: false,
        chicken: false,
        bacon: false,
        beef: false,
        olives: false,
        mushrooms: false,
        peppers: false,
        jalapenos: false,
        arugula: false,
        special: ''
    })
const [errors, setErrors] = useState({
    name: '',
    size: '',
    white: '',
    red: '',
    parmesan: '',
    mozzarella: '',
    pepperoni: '',
    sausage: '',
    chicken: '',
    bacon: '',
    beef: '',
    olives: '',
    mushrooms: '',
    peppers: '',
    jalapenos: '',
    arugula: '',
    special: ''
})
const [disabled, setDisabled] = useState(true)

    const setFormErrors = (name,value) => {
        yup.reach(schema, name).validate(value)
        .then(() => setErrors({ ...errors, [name]: ''}))
        .catch(err => setErrors({ ...errors, [name]:err.errors[0]}))
    }
    useEffect(() => {
        schema.isValid(formVals).then(valid => setDisabled(!valid))
    }, [formVals])

    const change = event => {
        const { name, type, checked, value } = event.target;
        const updatedInfo = type === 'checkbox' ? checked : value
        setFormErrors(name, updatedInfo)
        setFormVals({ ...formVals, [name]: updatedInfo})
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newForm = { 
            name: formVals.name.trim(),
            size: formVals.size.trim(),
            white: formVals.white,
            red: formVals.red,
            parmesan: formVals.parmesan,
            mozzarella: formVals.mozzarella,
            pepperoni: formVals.pepperoni,
            sausage: formVals.sausage,
            chicken: formVals.chicken,
            bacon: formVals.bacon,
            beef: formVals.beef,
            olives: formVals.olives,
            mushrooms: formVals.mushrooms,
            peppers: formVals.peppers,
            jalapenos: formVals.jalapenos,
            arugula: formVals.arugula,
            special: formVals.special.trim() }
              axios.post('https://reqres.in/api/orders', newForm)
              .then(res => {
                if (res.data) { const { data } = res; setFormVals({ ...formVals, data}) }
              })
              .catch(err => {
                console.log(err)
              })
        
    }
    return (
        <div className="pizza-form">
            <div style={{ color: 'red' }}>
                <div>{errors.name}</div>
            </div>
            <h1> Build your own pizza! </h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name-input'> Name: </label>
                <input onChange={change}
                value={formVals.name}
                name='name'
                type='text'
                />
                <br />
                <br />

                <label htmlFor='size-dropdown'> Select size: </label>
                <select onChange={change} name='size' value={formVals.size}>
                <option value=''>--Select One--</option>
                <option value='medium'>Medium (10 inch)</option>
                <option value='large'>Large (12 inch)</option>
                </select>
                <br />
                <br />

                <label htmlFor='sauceSelect'> Select sauce(s): </label>
                <div>
                    <input onChange={change} type='checkbox' checked={formVals.red} id='sauce' name='red' value={formVals.sauce}/> Red
                    <input onChange={change} type='checkbox' checked={formVals.white} id='sauce' name='white' value={formVals.sauce}/> White
                </div>
                <br />

                <label htmlFor='cheeseSelect'> Select cheese(s): </label>
                <div className='cheese'>
                    <input onChange={change} type='checkbox' id='cheese' name='parmesan' value={formVals.cheese}/> Parmesan
                    <input onChange={change} type='checkbox' id='cheese' name='mozzarella' value={formVals.cheese}/> Mozzarella
                </div>
                <br />

                <label htmlFor='toppingSelect'> Select toppings (select as many as you want!): </label>
                <div className='toppings'>
                    <input onChange={change} type='checkbox' checked={formVals.pepperoni} id='toppings' name='pepperoni' value={formVals.toppings}/> Pepperoni
                    <input onChange={change} type='checkbox' checked={formVals.sausage} id='toppings' name='sausage' value={formVals.toppings}/> Sausage
                    <input onChange={change} type='checkbox' checked={formVals.chicken} id='toppings' name='chicken' value={formVals.toppings}/> Chicken
                    <input onChange={change} type='checkbox' checked={formVals.bacon} id='toppings' name='bacon' value={formVals.toppings}/> Bacon
                    <input onChange={change} type='checkbox' checked={formVals.beef} id='toppings' name='beef' value={formVals.toppings}/> Beef
                    <br />
                    <input onChange={change} type='checkbox' checked={formVals.olives} id='toppings' name='olives' value={formVals.toppings}/> Olives
                    <input onChange={change} type='checkbox' checked={formVals.mushrooms} id='toppings' name='mushrooms' value={formVals.toppings}/> Mushrooms
                    <input onChange={change} type='checkbox' checked={formVals.peppers} id='toppings' name='peppers' value={formVals.toppings}/> Bell Peppers
                    <input onChange={change} type='checkbox' checked={formVals.jalapenos} id='toppings' name='jalapenos' value={formVals.toppings}/> Jalapenos               
                    <input onChange={change} type='checkbox' checked={formVals.arugula} id='toppings' name='arugula' value={formVals.toppings}/> Arugula
                </div>
                <br />

                <div className="special-instructions">
                <label htmlFor='special-text'> Special instructions: </label>
                <br />
                <textarea onChange={change}
                id='special-text'
                name='special'
                // type='textarea'
                placeholder='forks, knives, extra napkins'
                rows={8}
                cols={40}
                />
                </div>

                <input disabled={disabled} type='submit' />
            </form>
        </div>
    )
  }