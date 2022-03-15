import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ menu, children }) {
  return (
    <div className='mf-layout'>
      <Header menu={menu}/>
      <main className='mf-content'>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;