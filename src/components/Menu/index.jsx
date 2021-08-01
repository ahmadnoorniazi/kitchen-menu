import React from 'react'
import { Image } from 'antd';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom'


const Box = ({ onSelect }) => {

    const menuItem = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: "10px", width: "50%" }}>
                <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>5 Wings</h3>
                <p>5 crispy fried bone-in chicken wings in your choice of sauce</p>
            </div>
        )
    }
    return (
        <div style={{ border: '1px solid #D3D3D3', borderRadius: "10px", background: "#FFFFFF", marginBottom: "30px" }}>
            <div style={{ padding: "30px", display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: 'flex' }}>
                    <Image
                        preview={false}
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                    <h3 style={{ fontSize: "20px", fontWeight: "bold", marginLeft: "30px", marginTop: "30px" }}>Wing Pop</h3>
                </div>
                <div style={{ marginTop: "40px" }}>
                    <Button onClick={onSelect} style={{ fontWeight: "bold", fontSize: "16px" }}>Select menu</Button>
                </div>
            </div>
            <div style={{ padding: "30px" }}>
                <div style={{ borderBottom: '2px solid #D3D3D3', paddingBottom: "5px" }}>
                    <h3 style={{ fontSize: "20px", fontWeight: "bold", marginTop: "30px" }}>Popular Items</h3>
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
}

export default Box