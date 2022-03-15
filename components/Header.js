import { PrismicLink } from '@prismicio/react'
import React from 'react'

function Header({ menu }) {
  const { menuLinks } = menu.data

  return (
    <div className='mf-header'>
      <nav className='mf-menu'>
        {menuLinks.map(item => {
          return <PrismicLink key={item.link.id} field={item.link}>{item.title}</PrismicLink>
        })}
      </nav>
    </div>
  );
}

export default Header;