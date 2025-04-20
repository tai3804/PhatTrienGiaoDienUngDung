import { Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header'
import CounterAppRouter from './1_counter_app/CounterRouter'


function App() {

  return (
    <div className="">
    <Header></Header>

      <div className="flex justify-center items-center mt-8">
        <Routes>
          <Route path="/" element={<Navigate to="/counter_app" />} />
          <Route path="/counter_app/*" element={<CounterAppRouter />} />
          {/* <Route path="/to_do_list" element={<h1 className="text-3xl">To Do List</h1>} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
