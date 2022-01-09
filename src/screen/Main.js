import React from 'react'
import { Router, Switch, Route,Redirect,AppRoute,withRouter,BrowserRouter} from "react-router-dom"
import Market from './market/Market'
const Main = () => {
    return (
        <>
        {/* <App/> */}
        <BrowserRouter>
         <Switch> 
                
                <Route exact path={`/market/*`} component={Market} />
                {/* <Route exact path={`/market/btc`} component={Price} /> */}
                <Redirect from={`/*`} to={`/market/*`} />
            </Switch>
        </BrowserRouter>
           
        </>
    )
}

export default Main
