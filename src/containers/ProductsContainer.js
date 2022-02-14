
import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Products from "../components/Products";
import Product from "../components/Product";
import { actFetchProducts, actChangeMessage } from './../actions/index'
import axios from "axios";

class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return (
      <Products>
        {this.showProducts(products[0]
        )}
      </Products>
    );
  }

  componentDidMount() {
    axios.get('property_listing?p[rent_type]=1')
      .then(res => {
        this.props.fetchAllProducts(res.data.data)
      })
      .catch(err => {
        console.log(err);
      })
  }

  showProducts(products) {
    var result = null;
    if (products !== undefined) {
      if (products.length > 0) {
        result = products.map((product, index) => {
          return <Product key={index} product={product} />
        })
      }
    }

    return result;
  }
}

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }
    )
  ).isRequired
}

const mapsStateToProps = state => {
  return {
    products: state.products
  }
}

const mapsDispatchToProps = (dispatch, props) => {
  return {
    fetchAllProducts: (products) => {
      dispatch(actFetchProducts(products))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    }
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(ProductsContainer);
