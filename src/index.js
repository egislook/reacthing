import React from 'react'
import ReactDOM from 'react-dom'

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root')

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = Comp => {
    renderMethod(<Comp />, target)
  }

  // Render!
  render(App)

  // Hot Module Replacement
  // if (module && module.hot) {
  //   module.hot.accept('./App', () => {
  //     console.log('render');
  //     if(typeof window === 'object'){
  //       const link = '/main.css';
  //       const elem = document.querySelector('[href="' + link + '"]');
  //       const href = elem.href.split('?').shift();
  //       elem.href = href + '?' + new Date().getTime();
  //     }
  //     render(App)
  //   })
  // }
}
