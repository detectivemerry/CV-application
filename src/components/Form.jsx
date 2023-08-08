import '../styles/Form.css'
import { useState } from 'react';

export default function Form({title, fields, isReusable, onSubmit}){

    const [isSubmitted, setIsSubmitted] = useState(false) 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const formData = {};
        if(!isReusable){
            fields.forEach((field, idx) => {
                const input = e.target.elements[idx]; 
                formData[field.id] = input.value; 
            });
        }
        else{
            const resuableData = {};
            fields.forEach((field, idx) => {
                const input = e.target.elements[idx]; 
                resuableData[field.id] = input.value; 
            });
            if(title == "Educational Experience"){
                formData.schoolData = resuableData;
            }
            else if(title == "Work Experience"){
                formData.workData = resuableData; 
            }
        }
        setIsSubmitted(true);
        onSubmit(formData);
    }

    return (
        <div>
            {title}
            <form onSubmit={handleSubmit}>
            {fields.map((field, idx)=>{
                    return <div key = {idx}>
                    {field.label} : <input type = {field.type}/>
                    </div>
                })
            }
            {isSubmitted? <button type = "submit">Edit</button> : <button type = "submit">Submit</button>}
            </form>
        </div>
    )
}