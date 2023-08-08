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
        <div id = "form">
            <div class = "title">{title}</div>
            <form onSubmit={handleSubmit}>
            {fields.map((field, idx)=>{
                    return <div key = {idx}>
                    <input type = {field.type} placeholder={field.label}/>
                    </div>
                })
            }
            {isSubmitted? 
                <button id = "submit" type = "submit">Edit</button> : 
                <button id = "submit" type = "submit">Submit</button>}
            </form>
        </div>
    )
}