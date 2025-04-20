import { Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header'
import CounterAppRouter from './1_counter_app/CounterRouter'
import ToDoRouter from './2_to_do_list/ToDoRouter'
import ToggleThemeRouter from './3_toggle_theme/ToggleThemeRouter'
import CartRouter from './4_shopping_cart/CartRouter'
import LoginRouter from './5_login/LoginRouter'


function App() {

  return (
    <div className="">
    <Header></Header>

      <div className="flex justify-center items-center mt-8">
        <Routes>
          <Route path="/" element={<Navigate to="/counter_app" />} />
          <Route path="/counter_app/*" element={<CounterAppRouter />} />
          <Route path="/to_do_list/*" element={<ToDoRouter />} />
          <Route path="/toggle_theme/*" element={<ToggleThemeRouter />} />
          <Route path="/shopping_cart/*" element={<CartRouter />} />
          <Route path="/login/*" element={<LoginRouter />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
