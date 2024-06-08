import React, { useEffect, useState } from 'react'
import './Pixabay.css'

const Pixabay = () => {
    const[data,setData]=useState([])
    const[search,setSearch]=useState("")
    useEffect(()=>{
        fetch(`https://pixabay.com/api/?key=40804985-b34116f5d78761eea3a03687f&q=${search}&image_type=photo&pretty=true`)
        .then((res)=>res.json())
        .then((d)=>setData(d.hits))
    })
  return (
    <div className='App'>
        <input type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search here' className='border-2 fixed top-0 left-0 right-0' />
        {
            data.map((e)=>{
                return(
                    <div className='ImageBlock' key={e.id}>
                        <img src={e.webformatURL}  alt="" />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Pixabay

// height={e.webformatURL} width={e.webformatURL}

// import React from 'react'
// import Pixabay from './PixabayProject2/Pixabay'

// const App = () => {
//   return (
//     <div>
//       <Pixabay/>
//     </div>
//   )
// }

// export default App