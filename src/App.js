import UserStateBasic from './useState/final/UserStateBasic';
import UseStateAdv from './useState/final/UseStateAdv';
import UseStateExpForm from './useState/final/UseStateExpForm';
import Products from './components/Products';
import Store from './redux/Store';
import { Provider } from 'react-redux';


function App() {
  return (
    
    <Provider store={Store}>
      <Products />
    </Provider>
    
    
  )
}

export default App;
