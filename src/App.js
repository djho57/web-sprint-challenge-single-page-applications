import { BrowserRouter, Route, Link } from "react-router-dom";

import PizzaForm from './Components/PizzaForm';

// const initialFormVals = {
//   name: '',
//   size: '',
//   sauce: ['red', 'white'],
//   cheese: ['parmesan', 'mozzarella'],
//   toppings: ['pepperoni', 'sausage', 'chicken', 'bacon', 'beef', 'olives', 'mushrooms', 'bell peppers', 'jalapenos', 'arugula'],
//   special: '',
// }

const App = () => {

  // const [ formVals, setFormVals ] = useState(initialFormVals)

  // const getFormVals = newForm => {
  //   axios.post('https://reqres.in/api/orders', newForm)
  //   .then(res => {
  //     setFormVals([ ...formVals, res.data])
  //   })
  //   .catch(err => {
  //     console.log(err)
  //   })
  //   .finally(() => setFormVals(initialFormVals))
  // }
  // useEffect(() => {
  //   getFormVals()
  // }, [])

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   initialFormVals = formVals;
  //   console.log(formVals)
  // }

  return (
    <div className='app-container'>
      <header className='app-header'>
      <h1>Lambda Eats Pizza</h1>
        <BrowserRouter>
        <Link to='/pizza'>Order Pizza</Link>
        <Route path='/pizza' component={PizzaForm}/>
        </BrowserRouter>
      
      </header>
    </div>
  );
};
export default App;
