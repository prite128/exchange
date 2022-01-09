import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Card} from "antd";
import { useParams} from "react-router-dom"
import {useCoinHook,useCoinActionHook} from '../hook/redux/CoinHook'

const Price = () => {
    let { coinName } = useParams();
    let {coin}  =   useCoinHook()
    let {EffectGetCoin}  =   useCoinActionHook()
    let name    =   ""

    if(coin?.symbol){
        let tmpName =   coin.symbol.replace("_","/")
        name    =   tmpName.toUpperCase()
    }

    useEffect(() => {
        
        const getPrice  =  async ()  =>{
            if(coinName){
                    EffectGetCoin(coinName)
            }
            
        }
        getPrice()
        const interval = setInterval(() => getPrice(), 5000)
        return () => {
          clearInterval(interval);
        }
    }, [coinName])

    return (
        <div>
            <Card style={{ width: 300 , borderStyle: "solid",borderWidth: 2,borderColor: "black" }}>
                <h2>{name}</h2>
                <h1>{coin?.lastPrice}</h1>
                <p>Volume:{coin?.quoteVolume}</p>
            </Card>

        </div>
    )
}

export default Price
