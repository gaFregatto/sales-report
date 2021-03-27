import React from 'react';
import BarChart from "./components/BarChart";
import Dlist from "./components/Dropdown";
import { NavBar, NavItem } from "./components/NavBar";

const {useState} = React;

function App() {
  const [products, setProducts] = useState(null);
  const [brands, setBrands] = useState(null);


  const categories = [{label: 'Food' }, {label: 'Medicine'}];
  
  const products_food = [{label: 'vegetables' }, {label: 'meat'}] 
  const products_med = [{label: 'vicodin' }, {label: 'morfina'}] 
  
  const brand_veg = [{label: "vegetable1", value: 190}, {label: "vegetable2", value: 440}]
  const brand_meat = [{label: "meat1", value: 304}, {label: "meat2", value: 609}]                 
  const brand_vicodin = [{label: "vicodin1", value: 500}, {label:"vicodin2", value: 340}]
  const brand_morfina = [{label: "morfina1", value: 500}, {label:"morfina2", value: 230}]

  return (
    <div>
      <NavBar>
        <NavItem icon="Menu"/>
        <NavItem icon="User Name" img=""/>
        <NavItem icon="Sales Report"/>
      </NavBar>
      <Dlist opt={categories} placeholder="Category"/>
      <Dlist opt={products_food} placeholder="Product"/>
      <Dlist opt={brand_meat} placeholder="Brand"/>
      <BarChart/>
    </div>
  );
}

export default App;
