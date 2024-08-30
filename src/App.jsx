import React, { useState } from 'react'
import './App.css'
import myData from './data';
import Card from './component/card';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Footer from './component/footer';

function App() {

  return (
    <div>
      <div className='flex min-h-screen'>
        <div className='w-[400px] h-full fixed top-0 left-0'>
          <Navbar />
        </div>
        <div className='ml-[40px] flex-1'>
          <div>
            <Header className='w-full right-0'/>
          </div>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center align-center gap-10'>
          {myData.map((data, index) => (
            <Card 
              key={index}
              name={data.name} 
              url={data.url} 
              price={data.price} 
              description={data.description}
            />
          ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App;
