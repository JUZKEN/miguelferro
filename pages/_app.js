import React from "react";
import '../styles/globals.scss'
import Link from 'next/link'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { linkResolver, repositoryName } from '../prismicio'
import dynamic from 'next/dynamic'

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false
});

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>
            {children}
          </a>
        </Link>
      )}>
      <PrismicPreview repositoryName={repositoryName}>
        <AnimatedCursor 
          innerSize={8}
          outerScale={7}
          outerAlpha={0.1}
          color='255, 255, 255'
          />
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}