
import React from 'react';
import ProductsList from './ProductsList';
import products from './products'


class MyProductsApp extends React.Component {
    render() {
        return (
            <ProductsList products={products}/>
        )
    }
}

export default MyProductsApp;