
export default function CartResult({ cart }) {
  function showTotalAmount(cart) {
    var total = 0;
    for (var i = 0; i < cart.length; i++){
      total = total + cart[i].product.price * cart[i].quantity
    }
    // for (const element of cart) {
    //   console.log(element.product.price * element.quantity);
    //   total = total + 1
    // }
    return total;
  };
  return (
    <tr>
      <td colSpan="3"></td>
      <td>
        <h4>
          <strong>Tổng Tiền</strong>
        </h4>
      </td>
      <td>
        <h4>
          <strong>{showTotalAmount(cart)}$</strong>
        </h4>
      </td>
      <td colSpan="3">
        <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
          <i className="fa fa-angle-right right"></i>
        </button>
      </td>
    </tr>
  );
}