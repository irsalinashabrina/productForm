import React from 'react'
import { ProductService } from './ProductService'

const ServiceFactory = () => {
  return {
    productService:ProductService()
  }
}

export default ServiceFactory