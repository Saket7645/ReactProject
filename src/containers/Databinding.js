import React, { useState } from 'react'
function DataBinding(){
    const [data, setData] = useState({
        name: "Saket",
        age: 21,
        country: "India"
    })
    const handleChange=(event)=>{
        let value = event.target.value;
        setData({
            ...data,name:value
        });
    }
    const handleChange2=(SK)=>{
        let value = SK.target.value;
        setData({
            ...data,age:value
        });
    }

    return (
        <div>
            <h2>Data Binding</h2>
            <h4>
                One Way Binding: {data.name}- {data.age}
            </h4>
            <div>
                <input type='text' value={data.name}  onChange = {handleChange} /> 
                <br></br>
                <input type='text' value={data.age} onChange = {handleChange2}/> 
            </div>
        </div>
    )
}


export default DataBinding;