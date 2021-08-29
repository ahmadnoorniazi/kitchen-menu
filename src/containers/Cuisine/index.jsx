import React, { useContext, useState } from 'react'
import { Row, Col, Divider } from "antd";
import Box from '../../components/Box'
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom'
import { Spin } from 'antd';

import myContext from '../../MainContext'
import './index.css'

const Cuisine = () => {
    const history = useHistory()
    const [selectedCuisines, setSelectedCuisines] = useState([])
    const { cuisines, isLoading } = useContext(myContext)
    const onNext = () => {
        history.push({ pathname: '/menu', state: { selectedCuisines: selectedCuisines } })
    }

    if (isLoading) {
        return <div style={{ width: '100%', top: "50%", left: "50%", position: 'absolute' }}>
            <Spin size="large" />
        </div>

    }

    return (
        <div style={{ position: "relative" }}>
            <Box>
                <div style={{ marginTop: "100px" }}>
                    <h1 style={{ fontWeight: "bold", textAlign: "center" }}>What type of menus would you like to see?</h1>
                    <p style={{ color: "gray", textAlign: "center", marginBottom: "35px", fontWeight: "700", fontSize: "16px" }}>Select as many as you'd like</p>
                    <div style={{ marginBottom: "80px" }}>
                        <div style={{ display: "flex", width: "100%", flexFlow: "row wrap" }}>
                            {Array.isArray(cuisines) && cuisines.map((cus) => (
                                <div style={{ width: "22%", marginRight: "20px" }} key={cus} className={`main-box ${selectedCuisines.includes(cus) && 'main-box-selected'}`} span={6} onClick={() => setSelectedCuisines([...selectedCuisines, cus])}>
                                    <div >{cus}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Box>
            <div >
                <div style={{ textAlign: 'center', marginTop: "15px", position: 'fixed', width: "100%", bottom: 0, background: "#D3D3D3", padding: "10px" }} >
                    <Button onClick={onNext} style={{ paddingRight: "30px", paddingLeft: "30px" }} label="Next" />
                </div>
            </div>

        </div>
    )
}

export default Cuisine