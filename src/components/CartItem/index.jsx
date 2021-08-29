import React from 'react'
import { Image } from 'antd';
import { Checkbox } from 'antd';


const Box = ({ data, handleAddItem, selectedItems }) => {
    return (
        <>
            <div style={{ marginBottom: "30px", display: "flex", marginTop: "20px", flexWrap: "wrap" }}>
                <div style={{ display: "flex", width: "80%" }}>
                    <div>
                        <Image
                            preview={false}
                            width={200}
                            src={data.photoUrl}
                        />
                    </div>
                    <div style={{ marginTop: "15px", marginLeft: "20px" }}>
                        <h3 style={{ fontWeight: "bold" }}>{data.productName}</h3>
                        <p>{data.shortDescription}</p>
                        <p>{data.productDescription}</p>
                    </div>
                </div>
                <div style={{ width: "20%" }}>
                    <Checkbox checked={selectedItems[data.productName]} name={data.productName} onChange={handleAddItem}>{selectedItems[data.productName] ? 'Added' : 'Add Item'}</Checkbox>
                </div>
            </div>
        </>
    )
}

export default Box