import { Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getAllCategories } from './api/categoryAPI'

const CategoriesCheckbox = ({handleCategory}) => {
    // const categories = ["Mobiles","Laptops","Homes","Beauty Products", "Accessories"]
  const [categories, setCategories] = useState([])

  const [checked, setChecked] = useState([])

  useEffect(()=>{
    getAllCategories()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setCategories(data)
      }
    })
  },[])

  const handleChange = (e) => {
    let new_checked = [...checked]
    let itemExists = new_checked.findIndex(item=>item===e.target.value)
    if(itemExists === -1){
      new_checked.push(e.target.value)
    }
    else{
      new_checked.splice(itemExists,1)
    }
    setChecked(new_checked)
    handleCategory(new_checked,'category')
  }

  // [a, b, c] => a


  return (
    <>
    <Typography variant='h4' color={'secondary'} fontWeight = 'bold' marginTop='20px'>
                Departments
            </Typography>
        <FormGroup>
            {
                categories.map((category)=>{
                    // return <FormControlLabel control={<Checkbox color={'secondary'}/>} label={category}/>
                    return <div className='d-flex'>
                    <Checkbox color={'info'} id={category._id} value={category._id} onChange={handleChange}/>
                    <label htmlFor={category._id} className='mt-1 text-secondary fs-5 fw-bold'>{category.category_name}</label>
                    </div>
                })
            }      
    </FormGroup>
    </>
  )
}

export default CategoriesCheckbox