"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const ProductPage = () => {
  const router = useRouter()

  const handleOrder = () => {
    alert('Order placed successfully!');
    router.push('/');
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2 className="page-header">Product Details</h2>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>Iphone 18 Pro</td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>Latest generation iPhone with advanced camera capabilities and A16 Bionic chip</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>$999.99</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="d-grid gap-2 mt-3">
                        <button className="btn btn-primary" onClick={handleOrder}>
                            Order Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage