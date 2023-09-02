
import './App.css';
import Register from './component/Register';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';

function App() {
  return (
    
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Register/>}></Route>
            
         </Routes>
      </BrowserRouter>
       
    
  );
}

export default App;
