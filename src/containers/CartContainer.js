
import { Component } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import Cart from "../components/Cart";
import * as messages from './../constants/Message'
import CartItem from "../components/CartItem";
import CartResult from "../components/CartResult";
import { actRemoveCartItem, actChangeMessage, actUpAnDownQuantity } from './../actions/index';



class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <Cart >
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }

  showCartItem = (cart) => {
    var result = messages.MSG_CART_EMPTY
    var { onRemoveCart, onChangeMessage,onChangeQuantity } = this.props;
    if (cart.length > 0) {
      result = cart.map((cart, index) => {
        return (
          <CartItem key={index} cart={cart} onRemoveCart={onRemoveCart} onChangeMessage={onChangeMessage} onChangeQuantity={onChangeQuantity}/>
        )
      })
    }
    return result;
  }

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />
    }
    return result;
  }
}

CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired
}

const mapsStateToProps = state => {
  return {
    cart: state.cart
  }
}


const mapsDispatchToProps = (dispatch, props) => {
  return {
    onRemoveCart: (product) => {
      dispatch(actRemoveCartItem(product));
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    },
    onChangeQuantity: (product,quantity,upDown) => {
      dispatch(actUpAnDownQuantity(product,quantity,upDown));
    },
  }
}

export default connect(mapsStateToProps, mapsDispatchToProps)(CartContainer);
