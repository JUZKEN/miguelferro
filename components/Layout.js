import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ menu, children }) {
  return (
    <div className='mf-layout'>
      <Header menu={menu}/>
      <main className='mf-content'>
        <div className='container'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;