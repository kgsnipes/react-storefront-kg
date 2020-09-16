import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route
            path="/category/:categoryid"
            children={<CategoryListingPage />}
          />
          <Route path="/product/:productid" children={<ProductDetailPage />} />

          <Route path="/search" children={<SearchListingPage />} />
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/my-account">
            <Users />
          </Route>
          <Route path="/cart">
            <Users />
          </Route>
          <Route path="/checkout">
            <Users />
          </Route>
          <Route exact path="/">
            <Page id="Homepage" />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function CategoryListingPage() {
  let { categoryid } = useParams();
  return <h2>Category id is {categoryid}</h2>;
}

function Page(props) {
  return <h2>Page is {props.id}</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function ProductDetailPage() {
  let { productid } = useParams();
  return <h2>Product id : {productid}</h2>;
}

function LoginPage() {
  return <h2>login</h2>;
}

function NoMatch() {
  return <h1>Page not found</h1>;
}

function SearchListingPage() {
  return <h2>search listing page</h2>;
}
