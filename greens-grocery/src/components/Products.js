import React, { Component } from "react";
import formatCurrency from "../util";
import Modal from "react-modal";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/Products";
import { addToCart, removeFromCart } from "../actions/Cart";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
    };
  }
  componentDidMount() {
    this.props.fetchProducts();
  }
  openModal = (e, product) => {
    e.preventDefault();
    this.setState({ product });
  };
  closeModal = () => {
    this.setState({ product: null });
  };
  render() {
    const { product } = this.state;
    return (
      <div>
        <h1>Greens Grocery Store</h1>
        {!this.props.products ? (
          <div>Loading...</div>
        ) : (
          <ul className="products">
            {this.props.products.map((product) => (
              <li key={product.id}>
                <div className="product">
                  <p>{product.name}</p>
                  <div className="product-content">
                    <div className={`picture-frame`}>
                      <img
                        src={require(`../images/${product.img}`)}
                        alt={product.name}
                      ></img>
                    </div>
                    <div>{formatCurrency(product.ppu)}</div>
                  </div>
                  <div className="product-price">
                    <button
                      onClick={() => this.props.removeFromCart(product)}
                      className="button primary"
                    >
                      -
                    </button>
                    <button
                      onClick={() => this.props.addToCart(product)}
                      className="button primary"
                    >
                      +
                    </button>
                  </div>
                  <a href={"#"} onClick={(e) => this.openModal(e, product)}>
                    <div className="more-info">i</div>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}

        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <button className="close-modal" onClick={this.closeModal}>
              x
            </button>
            <div className="product-details">
              <img
                src={require(`../images/${product.img}`)}
                alt={product.name}
              ></img>
              <div className="product-details-description">
                <p>
                  <strong>{product.name}</strong>
                </p>
                <p>{product.description}</p>

                <div className="product-price">
                  <div>{formatCurrency(product.ppu)}</div>
                  <button
                    className="button primary"
                    onClick={() => {
                      this.props.addToCart(product);
                      this.closeModal();
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
export default connect((state) => ({ products: state.products.items }), {
  fetchProducts,
  addToCart,
  removeFromCart,
})(Products);
