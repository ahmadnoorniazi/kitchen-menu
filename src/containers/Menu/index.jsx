import React, { useContext } from 'react'
import Box from '../../components/Box'
import { Button } from 'primereact/button';
import Menu from '../../components/Menu';
import { useHistory, useLocation } from 'react-router-dom'
import myContext from '../../MainContext'

const style = { background: "#FFFFFF", padding: "2.5rem 2rem", textAlign: "center", fontWeight: "bold", fontSize: "18px", border: "1px solid #D3D3D3", borderRadius: "5px" };
const columnStyle = { marginBottom: "15px" }

const Cuisine = () => {

    const history = useHistory()
    const { state: { selectedCuisines } } = useLocation()
    const { menuItems, addAllDataItems } = useContext(myContext)
    const onNext = (data) => {
        addAllDataItems({ selectedMenu: data })
        history.push({ pathname: '/items', state: { menu: data } })
    }

    const filterMenuItems = (cuisines) => {
        console.log("menuItems", menuItems)
        console.log("cuisines", cuisines)

        const filteredResult = Array.isArray(menuItems) ? menuItems.filter(data => cuisines.includes(data.cuisine)) : []

        return filteredResult
    }

    const filterMenus = filterMenuItems(selectedCuisines)
    console.log("filterMenus", filterMenus)
    return (
        <div style={{ position: "relative" }}>
            <Box>
                <div style={{ marginTop: "100px" }}>
                    <h1 style={{ fontWeight: "800", textAlign: "center", marginBottom: 0 }}>Nice! Here are 4 menus</h1>
                    <h1 style={{ fontWeight: "800", textAlign: "center" }}>we suggest pick one!</h1>

                    <p style={{ color: "gray", textAlign: "center", marginBottom: "35px", fontWeight: "700", fontSize: "16px" }}>You can always pick more in the future.</p>
                    <div style={{ marginBottom: "80px" }}>
                        {
                            Array.isArray(filterMenus) && filterMenus.map(fd => (
                                <Menu onSelect={onNext} key={fd.menu} data={fd} />
                            ))

                        }
                    </div>
                </div>
            </Box>
        </div>
    )
}

export default Cuisine