
export default function CartItem({ cart, onRemoveCart, onChangeMessage, onChangeQuantity }) {
  function showSubtotal(price, quantity) {
    return price * quantity;
  };


  function onReMove(product) {
    onRemoveCart(product)
    onChangeMessage('Xóa sản phẩm thành công')
  }

  function onUpAndDownQuantity(product, quantity, upDown) {
    onChangeQuantity(product, quantity, upDown)
    onChangeMessage('Tăng giảm số lượng thành công')
  }
  
  return (

    <tr>
      <th scope="row">
        <img src={cart.product.image}
          alt={cart.product.name} className="img-fluid z-depth-0" />
      </th>
      <td>
        <h5>
          <strong>{cart.product.name}</strong>
        </h5>
      </td>
      <td>{cart.product.price}$</td>
      <td className="center-on-small-only">
        <span className="qty">{cart.quantity} </span>
        <div className="btn-group radio-group" data-toggle="buttons">
          <label className="btn btn-sm btn-primary
                                    btn-rounded waves-effect waves-light" onClick={() => onUpAndDownQuantity(cart.product, cart.quantity, 'down')}>
            <a href="/#"
            >—</a>

          </label>
          <label className="btn btn-sm btn-primary
                                    btn-rounded waves-effect waves-light" onClick={() => onUpAndDownQuantity(cart.product, cart.quantity, 'up')}>
            <a href="/#"
              
            >+</a>
          </label>
        </div>
      </td>
      <td>{showSubtotal(cart.product.price, cart.quantity)}</td>
      <td>
        <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
          title="" data-original-title="Remove item" onClick={() => onReMove(cart.product)}>
          X
        </button>
      </td>
    </tr>
  );

}