import React from 'react'
import { Image } from 'antd';
import { Checkbox } from 'antd';


const Box = () => {
    return (
        <div style={{ marginBottom: "30px", display: "flex", marginTop: "20px" }}>
            <div style={{ display: "flex" }}>
                <div>
                    <Image
                        preview={false}
                        width={200}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    />
                </div>
                <div style={{ marginTop: "15px", marginLeft: "20px" }}>
                    <h3 style={{ fontWeight: "bold" }}>5 Wings</h3>
                    <p>5 Wings | Kitchen print</p>
                    <p>5 crispy fried bone-in chicken wings in your choice of sauce</p>
                </div>
            </div>
            <div>
                <Checkbox onChange={() => { }}>Added</Checkbox>
            </div>
        </div>
    )
}

export default Box