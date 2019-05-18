import React, { Fragment, useEffect } from 'react'
import { Root, Routes, addPrefetchExcludes, Head } from 'react-static'
//
import { Link, Router } from '@reach/router'
import Dynamic from 'containers/Dynamic'

import './style.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

export default () => {
  
  useServiceWorker();
  
  return (
    <Fragment>
      <Meta />
      <Root>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/dynamic">Dynamic</Link>
        </nav>
        <div className="content">
          <React.Suspense fallback={<em>Loading...</em>}>
            <Router>
              <Dynamic path="dynamic" />
              <Routes path="*" />
            </Router>
          </React.Suspense>
        </div>
      </Root>
    </Fragment>
  )
}

const Meta = () => (
  <Head>
    <meta name="theme-color" content="#2196F3" />
    <link rel="manifest" href="/manifest.json" />
    <link rel="icon" href="icons/192.png" sizes="192x192" />
    <link rel="icon" href="icons/512.png" sizes="512x512" />
  </Head>
)

const useServiceWorker = () => {
  useEffect(() => {
    if(typeof document !== 'object') return
    
    if('serviceWorker' in window.navigator)
      window.navigator.serviceWorker.register('/sw.js').then( 
        ({ scope }) => console.log('ServiceWorker registered ', scope),
        (err) =>  console.log('ServiceWorker failed: ', err)
      )
  }, [])
}
