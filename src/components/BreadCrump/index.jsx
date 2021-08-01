import React from 'react'
import { Breadcrumb } from 'antd';
import {
    Link,
    useLocation
} from "react-router-dom";
import './index.css'
import { RightOutlined } from '@ant-design/icons'
const routes = [
    {
        path: 'info',
        breadcrumbName: 'Info',
    },
    {
        path: 'cuisine',
        breadcrumbName: 'Cuisine',
    },
    {
        path: 'menu',
        breadcrumbName: 'Menu',
    },
    {
        path: 'items',
        breadcrumbName: 'Items',
    },
    {
        path: 'second',
        breadcrumbName: 'Modifiers',
    },
    {
        path: 'second',
        breadcrumbName: 'Confirm',
    },
];

function ItemRender(route, params, routes, paths) {
    let location = useLocation();

    console.log(route, "iiiiiiiii", routes)
    console.log("paramssss", location)

    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
        <span className={`breadcrump-item ${location.pathname.includes(route.path) ? 'breadcrump-item-active' : ""}`}>{route.breadcrumbName}</span>
    ) : (
        <Link className={`breadcrump-item ${location.pathname.includes(route.path) ? 'breadcrump-item-active' : ""}`} to={route.path}>{route.breadcrumbName}</Link>
    );
}

const BreadCrump = () => {
    return (
        <Breadcrumb separator={<RightOutlined style={{ fontSize: '14px', color: "#D3D3D3", fontWeight: 'bold', marginLeft: "25px" }} />} className="main-top" itemRender={ItemRender} routes={routes} />
    )
}

export default BreadCrump;