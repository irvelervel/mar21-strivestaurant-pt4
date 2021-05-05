import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavBar from './components/MyNavBar'
import Home from './components/Home'
import Reservations from './components/Reservations'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DishDetails from './components/DishDetails'

// routing in React is basically conditionally render different components on different paths
// we'll need to declare Routes
// for declaring routes we need to wrap them in a Router

const App = () => {
  return (
    <div>
      <Router>
        {/* MyNavBar will ALWAYS be shown */}
        <MyNavBar title="Strivestaurant" />
        {/* <Route component={Home} path="/" exact /> */}
        <Route render={(routerProps) => <Home name="stefano" {...routerProps} />} path="/" exact />
        {/* when we declare a component into a Route, it's automatically receiving additional props from the Route itself */}
        {/* the props we're receiving automatically are 3 objects: history, location and match */}
        {/* if you want to pass your own props as well as receiving the router ones */}
        {/* use render instead of component and return a function out of it */}
        {/* the router props will be placed in the parameter of your function automatically */}
        <Route component={Reservations} path="/reservations" exact />
        {/* if you write your Route with the component prop */}
        {/* the Route will automatically enrich Reservations with history, location and match */}
        {/* what is a route providing? a route is conditionally render a component */}
        {/* another thing: it's passing additional props to my component */}
        <Route component={DishDetails} path="/details/:strive" />
      </Router>
    </div>
  )
}

export default App
