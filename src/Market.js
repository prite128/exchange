import React from 'react'
import { Button ,Row,Col} from "antd";
import { Router, Switch, Route,Redirect,AppRoute,withRouter,useRouteMatch ,useHistory} from "react-router-dom"
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Price from './Price'

const Market = () => {
    let { path, url } = useRouteMatch();
    let history = useHistory();

    console.log("path",path,"url",url);

    return (
        <div >
            <Row>

                <Col span={12} >
                    <div style={{ margin: "auto" }} >
                        <div style={{ marginTop : 10 }}>
                            <Button 
                                type="primary"
                                onClick={()=>{history.push("/market/BTC_THB")}}
                            >
                                BTC/THB
                            </Button>
                        </div>
                        <div style={{ marginTop : 10 }}>
                            <Button 
                                    type="primary"
                                    onClick={()=>{history.push("/market/BUSD_THB")}}
                                >
                                BUSD/THB
                            </Button>
                        </div>
                        <div style={{ marginTop : 10 }} >
                            <Button 
                                    type="primary"
                                    onClick={()=>{history.push("/market/USDT_THB")}}
                                >
                                USDT/THB
                                </Button>
                        </div>
                    </div>
                    
                </Col>
                <Col span={12} >
                    <Switch> 
                    {/* <Route exact path={path}>
                       <>aaaa</>
                    </Route> */}
                        <Route exact path={`/market/:coin`} component={Price} />
                        {/* <Redirect from={`/market/*`} to={`/market/btc`} />  */}
                    </Switch>
                            
                            
                    
                </Col>
            </Row>
            
           
        </div>
    )
}

export default Market
