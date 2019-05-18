import React from 'react';

exports.default = (options = {}) => {
  
  // const swFile = 'src/sw.js';
  
  return ({
    headElements: async (elements, state) => {
      return [
        ...elements,
        <link rel="manifest" href="/manifest.json" />,
        <meta name="theme-color" content="#F5F5F5" />,
        <link rel="icon" href="icons/192.png" sizes="192x192" />,
        <link rel="icon" href="icons/512.png" sizes="512x512" />,
      ]
    },
    // webpack: config => {
    //   console.log('WP');
    //   return config
    // },
    // headElements: async (elements, { meta }) => {
    //   console.log('tadam');
    //   return ([
    //     ...elements,
    //     <link rel="stylesheet" href="/manifest.json" />
    //   ])
      
    // },
  })
}