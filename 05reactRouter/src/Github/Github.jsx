import React, {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {

    const data = useLoaderData()

    // const [data,setData] = useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/noorulhassancs")
    //     .then((res) => res.json())
    //     .then((resp) => {
    //         console.log(resp);
    //         setData(resp)
    //     })
    // },[])

  return (
    <div className='text-white text-3xl p-5 flex flex-col content-center items-center'>
        <img src={data.avatar_url} alt="Git Image" width={200} className="rounded-full shadow-2xl"/>
        <p>Username : <span className='text-blue-700'>{data.name}</span></p>
    </div>
  )
}

export default Github