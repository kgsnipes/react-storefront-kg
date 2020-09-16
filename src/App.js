import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";
import "./styles.css";
import SessionService from "./services/SessionService";

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/test" children={<TestPage />} />

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
          <Route path="/:contentpage" children={<Page />} />

          <Route exact path="/" children={<Page />} />

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
  let { contentpage } = useParams();
  if (!contentpage) {
    contentpage = "Homepage";
  }
  return <h2>Page is {contentpage}</h2>;
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

function TestPage() {
  let sessionService = new SessionService();
  if (sessionService.isSupported()) {
    console.log(sessionService.createSession(new Date().getTime()));
  }
  return <h2>test</h2>;
}
