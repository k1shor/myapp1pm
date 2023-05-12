import React, { useEffect, useReducer, useState } from 'react'
import Navbar from '../../layout/Navbar'
import AdminSidebar from './AdminSidebar'
import { addProduct } from '../../api/productAPI'
import { isAuthenticated } from '../../api/userAPI'
import { getAllCategories } from '../../api/categoryAPI'

const AddProduct = () => {
  const productReducer = (state, action) => {
    if(action.target.name=='product_image'){
      state.formdata.set(action.target.name,action.target.files[0])
      return {...state, [action.target.name]: action.target.files[0] }
    }else{
      state.formdata.set(action.target.name,action.target.value)
      return {...state, [action.target.name]:action.target.value}
    }
  }
  // const [state, event] = useReducer(reducer,initialState)

  const [product, setProduct] = useReducer(productReducer, {formdata: new FormData})
  const [categories, setCategories] = useState([])
  const {token} = isAuthenticated()

  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

  // console.log(formdata)

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

  const handleSubmit = e =>{
    e.preventDefault()
    addProduct(product.formdata, token)
    .then(data=>{
      if(data.error){
        setError(data.error)
        setSuccess(false)
      }
      else{
        setSuccess(true)
        setError('')
      }
    })
  }

  const showError = () => {
    if(error){
      return <div className='alert alert-danger'>{error}</div>
    }
  }
  const showSuccess = () => {
    if(success){
      return <div className='alert alert-success'>Product added successfully.</div>
    }
  }

  return (
    
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <AdminSidebar />
            </div>
            <div className="col-md-9 col-sm-6">
              <h3 className='text-success text-decoration-underline pt-3'>Add New Product</h3>

              <form className='w-50 px-5 pt-4 pb-5 my-3 shadow-lg text-decoration-underline'>
                {showError()}
                {showSuccess()}
                <h3>Product Details</h3>
                <label htmlFor="product_name">Product Name</label>
                <input type="text" className='form-control' name='product_name' onChange={setProduct}/>
                <label htmlFor="product_name">Product Price</label>
                <input type="text" className='form-control' name='product_price' onChange={setProduct} />
                <label htmlFor="product_name">Product Description</label>
                <textarea type="text" className='form-control' name='product_description' onChange={setProduct}/>
                <label htmlFor="product_name">Count in Stock</label>
                <input type="number" className='form-control' name='count_in_stock' onChange={setProduct}/>

                <label htmlFor="product_name">Product image</label>
                <input type="file" className='form-control' name='product_image'onChange={setProduct}/>
                <label htmlFor="product_name">Category</label>
                <select name="category" id="" className='form-control' onChange={setProduct}>
                  <option value="">Choose Category</option>
                  {
                    categories.map(category=>{
                      return <option value={category._id} key={category._id}>{category.category_name}</option>
                    })
                  }
                </select>

                <button className='btn btn-warning mt-2 w-100' onClick={handleSubmit}>Add Product</button>
              </form>
            </div>
          </div>
        </div>
      </>

  )
}

export default AddProduct