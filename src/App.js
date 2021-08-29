import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css';
import './App.css';
import Info from './containers/Info'
import Cuisine from './containers/Cuisine'
import Menu from './containers/Menu/index'
import Items from './containers/Items'
import ConfirmModal from './containers/Confirm'
import { Provider } from './MainContext'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/Header'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keypjwZixi3Qdr4iy' }).base('appbp10kEkBoIYE1C');

function App() {
  const [allData, setAllData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchCuisines()
  }, [])
  console.log("mainnnnnnnnnnn", allData)

  const fetchCuisines = async () => {
    let cuisines = []
    let menus = []
    let categories = []
    let products = []
    let cuisineMenu = []
    setIsLoading(true)
    await new Promise((resolve, reject) => {
      base('Grid view').select({
        maxRecords: 300,
        // Selecting the first 3 records in Grid view:
        view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function (record, id) {
          const cuisine = record.get('CUISINE TYPE')
          const menu = record.get('MENU')
          const category = record.get('CATEGORY')
          const productName = record.get('PRODUCT_NAME')
          const shortDescription = record.get('SHORT_DESCRIPTION')
          const productDescription = record.get('PRODUCT_DESCRIPTION')
          const productPrice = record.get('PRODUCT_PRICE')
          const photoUrl = record.get('PHOTOURL')
          const thumbnailUrl = record.get('THUMBNAILURL')
          cuisines.push(cuisine)
          menus.push(menu)
          categories.push(category)
          products.push({
            cuisine,
            menu,
            category,
            productName,
            shortDescription,
            productDescription,
            productPrice,
            photoUrl,
            thumbnailUrl,

          })
          cuisineMenu.push({ cuisine, menu })
        });
        const unique = [...new Set(cuisines)]
        const uniqueMenu = [...new Set(menus)]
        const menuItems = []

        uniqueMenu.forEach(data => {

          const filterItems = products.filter(item => item.menu == data)
          const isMenuItems = menuItems.find(cu => cu.menu == data)
          const filterCuisine = cuisineMenu.find(cm => cm.menu = data)
          if (isMenuItems) {
            menuItems = menuItems.map(menuData => {
              if (menuData.menu == data) {
                return {
                  ...menuData,
                  items: [...menuData.items, ...filterItems],
                  cuisine: filterItems[0] ? filterItems[0].cuisine : "",
                  photoUrl: filterItems[0] ? filterItems[0].photoUrl : "",
                }
              } else {
                return menuData
              }
            })
            console.log("newLogic", menuItems)
          } else {
            console.log("alwaysElse", menuItems)

            menuItems.push({
              menu: data,
              items: filterItems,
              cuisine: filterItems[0] ? filterItems[0].cuisine : "",
              photoUrl: filterItems[0] ? filterItems[0].photoUrl : "",

            })
          }

          console.log("products", products)
          console.log("uniqueMenu", data)
          console.log("filterItemsssss", filterItems)
          console.log("isMenuItems", isMenuItems)
          console.log("menuItems", menuItems)
        })

        const uniqueCategory = [...new Set(categories)]

        const current = allData.cuisines ? allData.cuisines : []
        const currentMenuItems = allData.menuItems ? allData.menuItems : []
        const currentCategories = allData.categories ? allData.categories : []
        console.log("currrentMenuItems", currentMenuItems, "newwwwwwwwwww", menuItems)
        // console.log("currentCategories", currentMenuItems, "newwwwwwwwwww", categories)
        // console.log("current", current, "newwwwwwwwwww", cuisines)

        console.log("allData", allData, unique)
        setAllData({ ...allData, cuisines: [...current, ...unique], menuItems: [...currentMenuItems, ...menuItems], categories: [...currentCategories, ...uniqueCategory] })
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      }, function done(err) {
        resolve()
        if (err) { console.error(err); return; }
      });
    })
    console.log("here resolveeeeeeeeee", allData)
    setIsLoading(false)
  }

  const fetchMenu = async (selectedCuisines) => {

    let menu = []
    setIsLoading(true)
    await new Promise((resolve, reject) => {
      base('Grid view').select({
        maxRecords: 1000,
        // Selecting the first 3 records in Grid view:
        view: "Grid view"
      }).eachPage(function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function (record, id) {
          const cuisine = record.get('MENU')
          menu.push(cuisine)
        });
        const unique = [...new Set(menu)]
        const filterUnique = unique.filter(data => data)
        const current = allData.menu ? allData.menu : []
        console.log("allData", allData, unique)
        setAllData({ ...allData, menu: [...current, ...unique] })
        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      }, function done(err) {
        resolve()
        if (err) { console.error(err); return; }
      });
    })
    console.log("here resolveeeeeeeeee", allData)
    setIsLoading(false)
  }
  console.log('allData', allData)

  const addAllDataItems = (data) => {
    setAllData({ ...allData, ...data })
  }
  return (
    <Provider value={{ ...allData, isLoading, fetchMenu, addAllDataItems }}>
      <Router>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Header />
        <Switch>
          <Route path="/info">
            <Info />
          </Route>
          <Route path="/cuisine">
            <Cuisine />
          </Route>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/confirm">
            <ConfirmModal />
          </Route>
          <Route path="/">
            <Redirect to="/info" />
          </Route>
        </Switch>
      </Router>
    </Provider >
  )
}

export default App;
