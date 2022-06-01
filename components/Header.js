import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

function Header({ menu }) {
  const { menuLinks } = menu.data

  return (
    <div className='mf-header'>
      <div className='container'>
        <div className='wrapper'>
          <Link href='/'>
            <a className="site-branding"><Image src="/logo2.svg" width={175} height={28} /></a>
            {/* <h2 className='site-branding'>Miguel Ferro</h2> */}
          </Link>
          <Link href='mailto:mferro.acc@gmail.com'>Get in touch</Link>
        </div>
      </div>
    </div>
  );
}

export default Header;