import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts } from './Action'
const Products = ({ loading, products, getProducts }) => {
    useEffect(() => {
        getProducts()
    }, [getProducts]);
    if (loading) {
        return <h2 className="section-title">Loading...</h2>
    }
    return (
        <section className="section">
            <h2 className="section-title">Our products</h2>
            <ul className="products">
                {products.map(product => <li
                    key={product.id}
                    className="product"
                >
                    <img src={product.image.url} alt={product.title} />
                    <h4>{product.title}</h4>
                </li>
                )}
            </ul>
        </section>
    )
}

const mapStateToProps = ({ productState: { loading, products } }) => {
    return { loading, products };
}

export default connect(mapStateToProps, { getProducts })(Products);
