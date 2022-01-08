import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {Card} from "antd";
import { useParams} from "react-router-dom"


const Price = () => {
    let { coin } = useParams();
    const [coinData, setCoinData] = useState({})

    let name    =   ""

    if(coinData?.symbol){
        let tmpName =   coinData.symbol.replace("_","/")
        name    =   tmpName.toUpperCase()
    }

    useEffect(() => {
        
        const getPrice  =  async ()  =>{
            if(coin){
                const {data} = await axios.get("https://satangcorp.com/api/v3/ticker/24hr")

                let coinPrice   =   data.find(el => el.symbol.includes((coin+"").toLowerCase()))
                if(coinPrice){
                    setCoinData(coinPrice)
                }
            }
            
        }
        getPrice()
        // const interval = setInterval(() => getPrice(), 5000)
        // return () => {
        //   clearInterval(interval);
        // }
    }, [coin])

    return (
        <div>
            <Card style={{ width: 300 , borderStyle: "solid",borderWidth: 2,borderColor: "black" }}>
                <h2>{name}</h2>
                <h1>{coinData?.lastPrice}</h1>
                <p>Volume:{coinData?.quoteVolume}</p>
            </Card>

        </div>
    )
}

export default Price
