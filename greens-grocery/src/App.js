import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  return (
    <Provider store={store}>
      <div>
        <div className="content">
          <div className="main">
            <Products></Products>
          </div>
          <div className="sidebar">
            <Cart />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
