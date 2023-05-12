import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/pages/Contact'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Register from './components/pages/Register'
import Signin from './components/pages/Signin'
import Third from './third'
import EmailVerification from './components/pages/EmailVerification'
import ResendVerification from './components/pages/ResendVerification'
import ForgetPassword from './components/pages/ForgetPassword'
import ResetPassword from './components/pages/ResetPassword'
import AdminDashboard from './components/pages/Admin/AdminDashboard'
import AdminCategories from './components/pages/Admin/AdminCategories'
import AddCategory from './components/pages/Admin/AddCategory'
import UpdateCategory from './components/pages/Admin/UpdateCategory'
import AdminProducts from './components/pages/Admin/AdminProducts'
import AddProduct from './components/pages/Admin/AddProduct'
import UpdateProduct from './components/pages/Admin/UpdateProduct'
import Users from './components/pages/Admin/Users'
import Layout from './components/layout/Layout'
import AdminRoutes from './components/selectiveRoutes/AdminRoutes'
import UserRoutes from './components/selectiveRoutes/UserRoutes'
import Cart from './components/pages/user/Cart'
import ProductDetails from './components/pages/ProductDetails'
import Shipping from './components/pages/Shipping'
import PaymentComponent from './components/pages/PaymentComponent'
import AdminOrders from './components/pages/Admin/AdminOrders'
import UserProfile from './components/pages/UserProfile'

const MyRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path='/third' element={<Third />} />

        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<Register />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='/verification/:token' element={<EmailVerification />} />
        <Route path='/resendverification' element={<ResendVerification />} />
        <Route path='/forgetpassword' element={<ForgetPassword />} />
        <Route path='/resetpassword/:token' element={<ResetPassword />} />

        <Route path='/admin/' element={<AdminRoutes />}>
          <Route path='dashboard' element={<AdminDashboard />} />
          <Route path='category' element={<AdminCategories />} />
          <Route path='category/add' element={<AddCategory />} />
          <Route path='category/update/:id' element={<UpdateCategory />} />
          <Route path='products' element={<AdminProducts />} />
          <Route path='product/add' element={<AddProduct />} />
          <Route path='product/update/:id' element={<UpdateProduct />} />
          <Route path='users' element={<Users />} />
          <Route path='orders' element={<AdminOrders />} />
        </Route>

        <Route path='/' element={<UserRoutes />}>
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Shipping />} />
          <Route path='payment' element={<PaymentComponent />} />

          <Route path='/' element={<Layout />}>
            <Route path='user/profile' element={<UserProfile />} />
          </Route>
          
        </Route>
        <Route path='/product/:id' element={<ProductDetails />} />

</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes