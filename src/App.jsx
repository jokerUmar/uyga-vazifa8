import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Aside from './components/aside/aside'
import Main from './components/main/main'
import Api from './components/main-api/api'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

const url = "https://jsonplaceholder.typicode.com/todos"

const [data, setData] = useState([]);

const fetchData = async () => {
let request = await fetch(url)
let result = await request.json()
setData(result)
}

useEffect(()=>{
fetchData()
},[])


const paginate = (num) =>{
setCurrent(num)
}



const [current, setCurrent] = useState(1);

const [totalPage] = useState(14);

const firstIndex = current * totalPage
const lastIndex = firstIndex - totalPage
const lastData=data.slice(lastIndex,firstIndex)

return (
<>
  <div className='app'>
    
    <BrowserRouter>
      <Aside />

      <Routes>

        <Route path='/' element={<Main/>} />
        <Route path ='/api' element={<Api data={data} paginate={paginate} totalPage={totalPage} lastData={lastData}
          firstIndex={firstIndex} lastIndex={lastIndex} />} />

      </Routes>



    </BrowserRouter>

  </div>
</>
)
}

export default App