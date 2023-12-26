import React from 'react'
import Navbar from "../components/Header";
import Hero from "../components/Hero";
import Footer from '../components/Footer';
import CardProduct from '../components/CardProduct'

export default function Product() {
  return ( 
  <>
  <Navbar/>
  <Hero/>

    <div className='text-dark text-center' style={{backgroundColor: "#F2E3D5", paddingTop: "3rem"}}>
    <CardProduct displayAllProducts={true}/>

    <Footer/></div>
    </>
  )
}
