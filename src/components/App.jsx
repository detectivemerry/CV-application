import { useState } from 'react'
import '../styles/App.css'
import NavBar from './Navbar'
import Form from './Form'
import Preview from './Preview'
import forms from '../utils/forms'
import data from  '../utils/data'

function App() {

  const [currentForms, setCurrentForms] = useState(forms);

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

  const loadExample = () => {
    setFormData(data);
  }

  const clearPreview = () => {
    setFormData({
      firstName : '',
      lastName : '',
      email: '',
      phone: '',
      schoolData: [],
      workData: []
    })
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
            {form.isReusable && <button id = "add-more" onClick = {()=>{addForm(form.title, form.fields, true, idx)}}>Add more</button>}
            </>
          })
        }
          <div class = "title">Preview Options</div>
          <div class = "preview-options">
            <button class = "preview-option" onClick = {loadExample} >Load example</button>
            <button class = "preview-option" onClick = {clearPreview} >Clear preview</button>
          </div>
      </div>
      <div className='CV-preview'>
        <Preview formData = {formData} />
      </div>
    </div>
    </>

  )
}

export default App
