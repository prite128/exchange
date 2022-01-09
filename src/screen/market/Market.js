import React from 'react'
import { Button ,Row,Col} from "antd";
import { Router, Switch, Route,Redirect,AppRoute,withRouter,useRouteMatch ,useHistory} from "react-router-dom"
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Price from './price/Price'
const Market = () => {
    let { path, url } = useRouteMatch();
    let history = useHistory();

    return (
        <div >
            <Row>

                <Col span={12} >
                    <div style={{ margin: "auto" }} >
                        <div className='div-Button'>
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
                        <Route exact path={`/market/:coinName`} component={Price} />
                    </Switch>
                            
                            
                    
                </Col>
            </Row>
            
           
        </div>
    )
}

export default Market
