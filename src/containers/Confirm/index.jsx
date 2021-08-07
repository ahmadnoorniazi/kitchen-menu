import React from 'react'
import Box from '../../components/Box'
import { Button } from 'primereact/button';
import Menu from '../../components/Menu';
import { useHistory } from 'react-router-dom'
import { Image, Avatar } from 'antd';
const style = { background: "#FFFFFF", padding: "2.5rem 2rem", textAlign: "center", fontWeight: "bold", fontSize: "18px", border: "1px solid #D3D3D3", borderRadius: "5px" };
const columnStyle = { marginBottom: "15px" }

const Cuisine = () => {

    const history = useHistory()

    const onNext = () => {
        history.push('/items')
    }

    const menuItem = () => {
        return (
            <div style={{ display: 'flex', marginTop: "10px", width: "50%" }}>
                <Avatar
                    size={64}
                    src={<Image preview={false}
                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                />
                <p style={{ fontSize: "14px", fontWeight: "bold" }}>5 crispy fried bone-in chicken wings in your choice of sauce</p>
            </div>
        )
    }

    return (
        <div style={{ position: "relative" }}>
            <Box>
                <div style={{ marginTop: "100px" }}>
                    <h1 style={{ fontWeight: "800", textAlign: "center", marginBottom: 0 }}>We made it.</h1>
                    <h1 style={{ fontWeight: "800", textAlign: "center" }}>Here is your menu.</h1>

                    <p style={{ color: "gray", textAlign: "center", marginBottom: "35px", fontWeight: "700", fontSize: "16px" }}>You can always add/edit items in the future.</p>
                    <div style={{ marginBottom: "40px" }}>
                        <div style={{ border: '1px solid #D3D3D3', borderRadius: "10px", background: "#FFFFFF", marginBottom: "30px" }}>
                            <div style={{ padding: "30px", display: "flex", justifyContent: "space-between" }}>
                                <div style={{ display: 'flex' }}>
                                    <Image
                                        preview={false}
                                        width={200}
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                    <h3 style={{ fontSize: "20px", marginLeft: "30px", marginTop: "30px" }}>Chinese Yum! Yum!</h3>
                                </div>

                            </div>
                            <div style={{ padding: "30px" }}>
                                <div style={{ borderBottom: '2px solid #D3D3D3', paddingBottom: "5px" }}>
                                    <h3 style={{ fontSize: "14px", marginTop: "30px", fontWeight: "bold" }}> Poultry</h3>
                                </div>
                                <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
                                    {menuItem()}
                                    {menuItem()}
                                    {menuItem()}
                                    {menuItem()}
                                    {menuItem()}
                                </div>
                                <div style={{ borderBottom: '2px solid #D3D3D3', paddingBottom: "5px" }}>
                                    <h3 style={{ fontSize: "14px", marginTop: "30px", fontWeight: "bold" }}>Pork and Beef</h3>
                                </div>
                                <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
                                    {menuItem()}
                                    {menuItem()}
                                    {menuItem()}
                                    {menuItem()}
                                    {menuItem()}
                                </div>
                            </div>
                        </div>
    )
                    </div>
                </div>
            </Box>
            <div>
                <div style={{ textAlign: 'center', marginTop: "15px", position: 'fixed', width: "100%", bottom: 0, background: "#D3D3D3", padding: "10px", display: "flex", justifyContent: "center" }} >
                    <Button style={{ paddingRight: "30px", paddingLeft: "30px" }} label="I am done" />
                </div>
            </div>
        </div >
    )
}

export default Cuisine