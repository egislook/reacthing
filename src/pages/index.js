import React from 'react'
import { cssReload } from 'next-fucss/utils'

export default () => {
  cssReload();
  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="p:10px fs:250pc">Welcome to React-Statics</h1>
      <div>This is Fucss working example. Dont forget to use <strong>cssReload();</strong> for hot fucss reload</div>
      <button className="p:15px-30px br:5px bs:1 bd:0 bg:prim c:white m-t:20px">FUCSS POWER</button>
    </div>
  )
}
