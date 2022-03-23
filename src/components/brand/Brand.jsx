import React from 'react'
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css'

const Brand = () => {
  return (
<div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='br1'/>
    </div>
    <div>
      <img src={slack} alt='br2'/>
    </div>
    <div>
      <img src={atlassian} alt='br3'/>
    </div>
    <div>
      <img src={dropbox} alt='br4'/>
    </div>
    <div>
      <img src={shopify} alt='br5'/>
    </div>
  </div>  )
}

export default Brand