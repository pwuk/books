import './App.css';


import {
    BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import {Books} from "./Books";

const basename = process.env.NODE_ENV === 'test' ? '/' : '/books';

export default function App() {
  return (
      <Router basename={basename}>
        <div>
          <Switch>
             <Route path="/admin/" children={<Admin />} />
            <Route path="/:page?/:size?/:filter?" children={<Books />} />
          </Switch>
        </div>
      </Router>
  );
}

const Admin = () => <div>Admin page</div>
