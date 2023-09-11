import React from 'react'
import { Search } from '@kdcloudjs/kdesign'
import './index.less';
interface searchbarParams{
  isAtTop:boolean;
  hovered:boolean;
}
export default function NavbarSearch(props:searchbarParams) {
  const handlePressEnter = (value:any) => {
    console.log(value)
  }
  const handleChange = (e:any) => {
    console.log(e)
  }


  const versionStyle={
    color: props.isAtTop&&!props.hovered ? 'white' :'#999',
  }
  
  return (
    <div className='search-bar'>
      <Search className='search-bar-main' prefix onSearch={handleChange} onPressEnter={handlePressEnter} borderType='bordered' placeholder='搜索您感兴趣的内容'/>
      <div className="version" style={versionStyle}>v 2.0.0</div>
    </div>
  )
}