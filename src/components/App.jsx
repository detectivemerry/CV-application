import { useState } from 'react'
import '../styles/App.css'
import NavBar from './Navbar'
import Form from './Form'
import Preview from './Preview'
import formSettings from '../utils/data'

function App() {

  const [currentForms, setCurrentForms] = useState(formSettings);

  const [formData, setFormData] = useState({
    firstName : '',
    lastName : '',
    email: '',
    phone: '',
    schoolData: [],
    workData: []
  })

  const onSubmit = (newFormData) => {
    for (const [key, value] of Object.entries(newFormData)) {
      if(key == "schoolData" || key == "workData"){
        setFormData((prevData)=>({
          ...prevData,
          [key]:[...prevData[key], value],
        }))
      }
      else{
        setFormData((prevData)=>({
          ...prevData,
          [key]:value,
        }))
      }
    }
  }

  const addForm = (title, fields, isReusable, idx) => {
    setCurrentForms((prevData)=>{
      let newData = [...prevData]
      newData.splice(idx + 1, 0, { title: title, fields: fields, isReusable: isReusable, key: idx + 1 });//idx + 1 to push new form after previous
      return newData
    })
  }

  return (
    <>
    <NavBar/>
    <div className='content'>
      <div className = "CV-setting">
        {
          currentForms.map((form, idx)=>{
            return <>
            <Form
            key = {idx}
            title = {form.title}
            fields = {form.fields}
            isReusable = {form.isReusable}
            onSubmit = {onSubmit}
            />
            {form.isReusable && <button onClick = {()=>{addForm(form.title, form.fields, true, idx)}}>Add more</button>}
            </>
          })
        }
      </div>
      <div className='CV-preview'>
        <Preview formData = {formData} />
      </div>
    </div>
    </>

  )
}

export default App
