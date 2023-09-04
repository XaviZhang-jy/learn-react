import React from 'react';
import './index.less';
import { Me } from "@kdcloudjs/kdesign-icons";
import NavbarSearch from "./search";

const navTitles = ['首页', '全局规则', '设计规范', '开发', '资源'];

const Navbar = () => {

  const [isAtTop, setIsAtTop] = React.useState(true);
  const [hovered, setHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  }
  const handleMouseLeave = () => {
    setHovered(false);
  }

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsAtTop(scrollTop === 0);
  };

  const style =  {
    background : isAtTop&&!hovered ? 'transparent': 'white',
    boxShadow:  isAtTop&&!hovered ? "none" : "0 1px 2px 0 rgba(0, 0, 0, 0.1)",
  }
  const textStyle ={
    color: isAtTop&&!hovered ? "white" : "black",
  }
  const logoStyle={
    backgroundImage: isAtTop&&!hovered ? 'url(https://kingdee.design/theme/kui_white.svg)':'url(https://kingdee.design/theme/kui.svg)',
  }
  const MeStyle={
        fill: isAtTop&&!hovered ? '#fff' : 'black',
  }

  // 添加滚动事件监听器
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
        <React.Fragment>
            <div className="navbar" style={style}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
                <div className="navbar-Logo" style={logoStyle}></div>

                <ul className="navbar-titles">
                    {navTitles.map((navTitle, index) => (
                        <li className="nav-title" key={index}>
                            <span className="nav-title-span" style={textStyle}>
                                {navTitle}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="nav-right">
                    <div className="nav-titles"></div>
                    <NavbarSearch isAtTop={isAtTop} hovered={hovered}/>
                </div>
            </div>
            <div className="loginLogo-container">
                <Me className="loginLogo" fill={MeStyle.fill}/>
            </div>
        </React.Fragment>
    );
}

export default Navbar;
