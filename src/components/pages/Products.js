import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from '@mui/material'
import CategoriesCheckbox from '../CategoriesCheckbox'
import Footer from '../layout/Footer'
import Navbar from '../layout/Navbar'
import PriceRadio from '../PriceRadio'
import { getAllProducts, getFilteredProducts } from '../api/productAPI'
import { API } from '../../config'

const Products = () => {
  const [products, setProducts] = useState([])

  const [filter, setFilter] = useState({category:[], product_price:[]})

  // {category: [mobile_id, laptop_id], product_price: [0 , 999]}

  const handleFilter = (filters, filterBy) => {
    setFilter({...filter, [filterBy]:filters})
    console.log(filter)
  }

  useEffect(() => {
    // getAllProducts()
    getFilteredProducts(filter)
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          console.log(data)
          setProducts(data)
        }
      })
  }, [filter])

  return (
    <>
      <Navbar />
      <Box display={'flex'}>
        <Box width={'25%'} backgroundColor={'primary.light'} padding={'25px'} sx={{ padding: '25px' }}>
          <Typography variant='h4' color={'secondary'} fontWeight='bold'>
            Deals
          </Typography>
          <ul className='list-unstyled h4'>
            <Link to='#' style={{ textDecoration: 'none', color: 'gold' }}><li>Deals of the day</li></Link>
            <li><Link to='#' style={{ textDecoration: 'none', color: 'gold' }}>Flash Sales</Link></li>
            <li><Link to='#' style={{ textDecoration: 'none', color: 'gold' }}>New Year offer</Link></li>
          </ul>

          {/* categories */}
          <CategoriesCheckbox handleCategory={handleFilter} />

          {/* prices */}
          <PriceRadio handlePrice={handleFilter}/>
        </Box>
        <Box width={'75%'}>
          <Grid container spacing={4} padding={4}>
            {
              products && products.map((product, i) => {
                return <Grid item xs={4}>
                  <Card sx={{ maxWidth: 345, borderRadius: 5 }} >
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="240"
                        image={`${API}/${product.product_image}`}
                        alt={product.product_name}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.product_name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                          Rs.{product.product_price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          In Stock: {product.count_in_stock}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Rating: <Rating value={product.rating}/>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Link href={`/product/${product._id}`} size="small" color="primary">
                        View Details
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              })
            }


          </Grid>
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default Products