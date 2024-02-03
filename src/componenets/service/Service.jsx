import React, { useEffect,useState } from 'react'

function Service() {
 const [data,setdata]=useState([]);
    useEffect(()=>{
fetch('https://api.github.com/users/channrama')
.then(response=>response.json())
.then(data=>setdata(data))
console.log(data);
    },[data])
  return (
   <>
   <h1>{data.followers}</h1>
   <img src={data.avatar_url} alt="" />
   </>
  )
}

export default Service