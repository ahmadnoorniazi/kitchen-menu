import React, { useContext, useState } from 'react'
import Box from '../../components/Box'
import { Button } from 'primereact/button';
import CartItem from '../../components/CartItem';
import { Image } from 'antd';
import { useHistory, useLocation } from 'react-router-dom'
import myContext from '../../MainContext'

const style = { background: "#FFFFFF", padding: "2.5rem 2rem", textAlign: "center", fontWeight: "bold", fontSize: "18px", border: "1px solid #D3D3D3", borderRadius: "5px" };
const columnStyle = { marginBottom: "15px" }

const Items = () => {
    const { state } = useLocation()
    const { menuItems, addAllDataItems } = useContext(myContext)
    const [selectedItems, setSelectedItems] = useState({})
    const [selectedItemsData, setSelectedItemsData] = useState([])

    const menuData = state?.menu ? state.menu : false
    const history = useHistory()
    const filterItems = (data) => {
        if (Array.isArray(menuItems) && menuData) {
            const getItems = Array.isArray(menuItems) ? menuItems.find(mn => mn?.menu == data?.menu) : []
            const items = getItems ? getItems.items : []
            const category = items.map(item => item.category)
            let itemsByCategory = []
            category.forEach((io) => {
                const filterItems = items.filter(jk => jk.category == io)
                const findCurrent = itemsByCategory.find(yu => yu.category == io)
                if (findCurrent) {
                    itemsByCategory = itemsByCategory.map(er => {
                        if (er.category == io) {
                            return { ...er, items: [...er.items, ...filterItems] }
                        } else {
                            return er
                        }
                    })
                }
                else {
                    itemsByCategory.push({ category: io, items: filterItems })
                }
            })
            return itemsByCategory
        }

        return []

    }

    const handleAddItem = (e) => {
        setSelectedItems({ ...selectedItems, [e.target.name]: e.target.checked })
    }


    const itemList = filterItems(menuData)
    console.log("itemList", itemList)
    return (
        <div style={{ position: "relative", }}>
            <div style={{ width: "100%", marginTop: "55px" }}>
                <Image
                    style={{
                        backgroundSize: "cover",
                        width: "100%"
                    }}
                    width="100%"
                    height="auto"
                    preview={false}
                    src=" https://cloud.indiaimagine.com/wp-content/uploads/2019/08/Indian_Food_Cover.jpg"
                />
            </div>
            <Box>
                <div style={{ marginTop: "100px" }}>
                    <h1 style={{ fontWeight: "800", textAlign: "center", marginBottom: 0 }}>Wing Pop is amazing. Add the items</h1>
                    <h1 style={{ fontWeight: "800", textAlign: "center" }}>you can make to your menu</h1>
                    <p style={{ color: "gray", textAlign: "center", marginBottom: "35px", fontWeight: "700", fontSize: "16px" }}>You can always pick more in the future.</p>
                    <div style={{ marginBottom: "80px" }}>
                        {itemList.map(item => (
                            <>
                                <div style={{ borderBottom: '2px solid #D3D3D3', paddingBottom: "5px" }}>
                                    <h3 style={{ fontSize: "16px", fontWeight: "bold", marginTop: "20px" }}>{item.category}</h3>
                                </div>
                                {
                                    item.items.map(d => (
                                        <CartItem data={d} handleAddItem={handleAddItem} setSelectedItemsData={setSelectedItemsData} selectedItems={selectedItems} />
                                    ))
                                }
                            </>
                        ))}


                    </div>
                </div>
            </Box>
            <div>
                <div style={{ textAlign: 'center', marginTop: "15px", position: 'fixed', width: "100%", bottom: 0, background: "#D3D3D3", padding: "10px", display: "flex", justifyContent: "center" }} >
                    <p style={{ marginTop: "10px", marginRight: "10px", fontSize: "16px" }}>9 / 10</p>
                    <Button style={{ paddingRight: "30px", paddingLeft: "30px" }} label="Next" onClick={() => {
                        addAllDataItems({ selectedItems: [] })
                        history.push('/confirm')
                    }} />
                </div>
            </div>
        </div >
    )
}

export default Items