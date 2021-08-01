import React from 'react'
import Breadcrumb from '../BreadCrump'
import Box from '../Box'
import { Layout, Menu } from 'antd';

const { Header, Content, Footer } = Layout;

const HeaderComponent = () => {
    return (
        <Header style={{
            position: 'fixed', zIndex: 1, width: '100%', padding: "10px", borderBottom: " 2px solid #D3D3D3", background: "gray"

        }}>
            <Box>
                <Breadcrumb />
            </Box>
        </Header>
    )
}

export default HeaderComponent
