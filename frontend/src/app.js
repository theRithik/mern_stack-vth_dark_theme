import React from 'react'
import { BrowserRouter , Route,} from 'react-router-dom/cjs/react-router-dom.min'
import Home from './home/home'
import Footer from './footer'
import ListDisplay from './listing/listDisplay'
import RestDetails from './details/restDetails'
import PlaceOrder from './orders/placeOrder'
import DisplayOrder from './orders/displayOrders'
import Login from './login'
import Register from './register'

const App =()=>{
    return(
        <>
        <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/listing/:id' component={ListDisplay}/>
        <Route path='/details' component={RestDetails}/>
        <Route path='/placeOrder/:restname' component={PlaceOrder}/>
        <Route path='/displayOrders' component={DisplayOrder}/>
       <Route path='/Register' component={Register}/>
        <Footer/>
        </BrowserRouter>
       
        </>
    )
}
export default App