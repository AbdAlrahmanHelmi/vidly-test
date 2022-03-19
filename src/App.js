import React, { Component } from "react";

import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import posts from "./Components/posts";
import Home from "./Components/home";
import ProductDetails from "./Components/productDetails";

// import Movies from './Components/Movies';
import products from "./Components/products";
import Dashboard from "./Components/admin/dashboard";
import Counters from "./Components/counters";
import Navbar from "./Components/navbar";
import Movies from "./Components/Movies";
import Pagination from "./Components/common/pagination";
import Products from "./Components/products";
import NotFound from "./Components/notFound";
import Posts from "./Components/admin/posts";
import Customers from "./Components/Custmors";
import Rental from "./Components/Rental";
import Register from "./Components/register";
import LoginForm from "./Components/loginForm";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((n) => n.id !== counterId);
    this.setState({
      counters: counters,
    });
  };

  handleInrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = counters[index].value + 1;
    this.setState({ counters });
  };
  handelReset = (stat) => {
    const reset = stat.map((c) => (c.value = 0));

    this.setState({
      Counters: reset,
    });
  };
  handelDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value = counters[index].value - 1;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/login" component={LoginForm} />

            <Route path="/Products/:id" component={ProductDetails} />
            <Route
              path="/products"
              render={(props) => <Products sortBy={"newSet"} {...props} />}
            />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rental" component={Rental} />
            <Route path="/posts/:year?/:month?" component={posts} />
            <Route path="/admin" component={Dashboard} />
            <Route path="/admin/posts" component={Posts} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Route path={"/register"} component={Register} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
