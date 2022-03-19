import React from 'react'
import { PrismicLink } from '@prismicio/react'
import Image from 'next/image'

function Header({ menu }) {
  const { menuLinks } = menu.data

  return (
    <div className='mf-header'>
      <div className='container'>
        <div className='wrapper'>
          <Image src="/logo.svg" width={50} height={42} />
          <div className='mf-menu'>
            {menuLinks.map(item => {
              return <PrismicLink key={item.link.id} field={item.link}>{item.title}</PrismicLink>
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;