
import React from 'react';
import products from './products.js';
import ProductsList from './ProductsList'

const withSearch = (WrappedComponent) => {
    return class extends React.Component {
        state = {
            searchTerm: ""
        }
    
        handleSearch = event => {
            this.setState(
                {searchTerm: event.target.value}
            )
        }
    
        render() {
            const {searchTerm} = this.state;
    
            return (
                <>
                    <input onChange={this.handleSearch} value={this.state.searchTerm} type="text" placeholder="Search"/>
                    <ProductsList searchTerm={this.state.searchTerm}/>
                </>
            )
        }
    }
}

const ProductsListWithSearch = withSearch(ProductsList);





    export default ProductsListWithSearch;
