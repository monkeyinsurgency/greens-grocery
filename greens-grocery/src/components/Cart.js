import React, { Component } from "react";
import formatCurrency from "../util";
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        {cartItems.length === 0 ? (
          <div className="cart cart-header">Cart is empty</div>
        ) : (
          <div className="cart cart-header">Your selected items are below</div>
        )}

        <div>
          <div className="cart">
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <div>
                      {item.count} {item.name}
                    </div>
                    <div className="right">{formatCurrency(item.ppu)}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length !== 0 && (
            <div>
              <div className="cart">
                <div className="total">
                  <div>
                    Total:{" "}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.ppu * c.count, 0)
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    cartItems: state.cart.cartItems,
  }),
  null
)(Cart);
