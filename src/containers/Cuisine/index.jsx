import React from 'react'
import { Row, Col, Divider } from "antd";
import Box from '../../components/Box'
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom'
import './index.css'
const Cuisine = () => {

    const history = useHistory()

    const onNext = () => {
        history.push('/menu')
    }

    return (
        <div style={{ position: "relative" }}>
            <Box>
                <div style={{ marginTop: "100px" }}>
                    <h1 style={{ fontWeight: "bold", textAlign: "center" }}>What type of menus would you like to see?</h1>
                    <p style={{ color: "gray", textAlign: "center", marginBottom: "35px", fontWeight: "700", fontSize: "16px" }}>Select as many as you'd like</p>
                    <div style={{ marginBottom: "80px" }}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">Acai Bowls</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">American</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">Asian</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">Asian Fusion</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">BBQ</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">BBQ</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">BBQ</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">BBQ</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">BBQ</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">BBQ</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">BBQ</div>
                            </Col>
                            <Col className="gutter-row column-style" span={6}>
                                <div className="main-box">BBQ</div>
                            </Col>



                        </Row>
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