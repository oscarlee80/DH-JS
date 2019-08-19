import React from 'react';
import Product from './Product';

const productsUrl = "http://localhost:3001/products"

class ProductList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products : [],
            listing: false
        }
    }

    componentWillMount() {
        fetch(productsUrl)
        .then(response => response.json())
        .then(products => {
            this.setState({products})
        })
    }

    listProducts = () => {
        this.setState({
            listing: true
        })
    }

    decrementStock = (e) => {
        let products = this.state.products.map(p => {
            if (p.id == e.currentTarget.value) {
                return {
                    ...p,
                    stock: p.stock-1,
                }
            }
            return p
        })
        
        this.setState({products})
    }


  render() {

    let total = this.state.products.reduce((prev, current) => {
        console.log(prev)
        return Number(prev + current.stock * current.price).toFixed(2)
    }, 0)


    return (
        <div>
            <h1>Lista de Productos ({this.state.products.length})</h1>

            <button onClick={this.listProducts}>Ver lista de productos</button>

            <p>Total a pagar: $ {total}</p>

            {
                this.state.listing ?
                this.state.products.map((p, i) => <Product key={i} buyAction={this.decrementStock} info={p} />)
                : ''
            }
        </div>
    );
    }
}

export default ProductList;