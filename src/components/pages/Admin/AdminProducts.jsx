import React, { useEffect, useState } from 'react'
import Navbar from '../../layout/Navbar'
import AdminSidebar from './AdminSidebar'
import { getAllProducts } from '../../api/productAPI'
import { API } from '../../../config'
import { Link } from 'react-router-dom'

const AdminProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getAllProducts()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    setProducts(data)
                }
            })
    }, [])

    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9 col-sm-6">
                        <div className="d-flex justify-content-between">
                            <h3 className='mt-3 text-success text-decoration-underline'>Products</h3>
                            <Link to='/admin/product/add' className='btn btn-success h-75 mt-3'>Add New Product</Link>
                        </div>
                        <table className='table table-hover text-center table-bordered align-middle'>
                            <thead>
                                <tr className='table-dark'>
                                    <td>S.No.</td>
                                    <td>Product Image</td>
                                    <td>Product Name</td>
                                    <td>Unit Price</td>
                                    <td>Count in Stock</td>
                                    <td>Category</td>
                                    <td>Rating</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products && products.map((product, i) => {
                                        return <tr key={product._id}>
                                            <td>{i + 1}</td>
                                            <td>
                                                <img src={`${API}/${product.product_image}`} alt={product.product_name} style={{ height: "100px" }} />
                                            </td>
                                            <td>{product.product_name}</td>
                                            <td>{product.product_price}</td>
                                            <td>{product.count_in_stock}</td>
                                            <td>{product.category && product.category.category_name}</td>
                                            <td>{product.rating}</td>
                                            <td>
                                                <div className="btn-group">
                                                    <Link to={`/admin/product/update/${product._id}`} className='btn btn-warning'><i className='bi bi-pencil'></i></Link>
                                                    <button className='btn btn-danger'><i className='bi bi-trash'></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>


                    </div>
                </div>
            </div>
        </>

    )
}

export default AdminProducts