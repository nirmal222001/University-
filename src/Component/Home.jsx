import axios from 'axios';
import React, { useEffect, useState } from 'react';
import st from './style.module.css'
const Home = () => {

    let [data,setdata]=useState([])
    let [input,setinput]=useState("")
    
    
      useEffect(()=>{
        axios.get("http://universities.hipolabs.com/search?name=")
        .then((a)=>{
            console.log("got");
            setdata(a.data)
        })
      },[])


      
    let inputdata=(s)=>{
        setinput(s.target.value)
    }
    let fildata=data.filter((s)=>s.country==input)
    
        return (
    <div>
        <div id={st.detail}>
            <h1>Student details</h1>
        </div>
        <div id={st.main}>
            <label htmlFor="">Enter a Country:</label>
            <input type="text" onChange={inputdata} value={input} />
        </div>
        <div>
            <button id={st.btn}>search </button>
        </div>

        <h1>count:{fildata.length}</h1>
        <div id={st.main1}>
         {fildata.map((s)=>{
            return(
                <div>
                    <h1>name:{s.name} </h1>
                    <h1>country: {s.country}</h1>
                </div>
            )
         })}
        </div>
    </div>
  );
}

export default Home;
