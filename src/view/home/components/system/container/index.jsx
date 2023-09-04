import SystemItem from "./item";
import './index.less';

const item1Props = {
    backgroundImage: "url('https://kingdee.design/static/design1.85c948bd.svg')",
    firstTitle: "设计规范",
    secondTitle: "企业级产品设计规范，提升产品体验的一致性",
    itemTitle1: "PC端",
    item1Detail1Img: "https://kingdee.design/static/design-rule1.6eafb556.svg",
    item1Detail1Text: "PC组件设计规范",
    item1Detail2Img: "https://kingdee.design/static/design-rule2.23970ac1.svg",
    item1Detail2Text: "PC典型页面",
    itemTitle2: "移动端",
    item2Detail1Img: "https://kingdee.design/static/design-rule3.8b19d42d.svg",
    item2Detail1Text: "移动组件设计规范",
    item2Detail2Img: "https://kingdee.design/static/design-rule4.ee94af7c.svg",
    item2Detail2Text: "移动典型页面",
    itemTitle3: "可视化",
    item3Detail1Img: "https://kingdee.design/static/design-rule5.6a9d6e86.svg",
    item3Detail1Text: "可视化概览",
    item3Detail2Img: "https://kingdee.design/static/design-rule6.686b17c5.svg",
    item3Detail2Text: "可视化组件设计"
};

const item2Props = {
    backgroundImage: "url('https://kingdee.design/static/design3.89f257b9.svg')",
    firstTitle: "设计资源",
    secondTitle: "KDesign 组件资源，帮助你创造优秀的产品设计",
    itemTitle1: "PC端",
    item1Detail1Img: "https://kingdee.design/static/design-resources1.e837a83f.svg",
    item1Detail1Text: "Sketch 组件",
    item1Detail2Img: "https://kingdee.design/static/design-resources2.addf9ce4.svg",
    item1Detail2Text: "Axure 组件",
    itemTitle2: "移动端",
    item2Detail1Img: "https://kingdee.design/static/design-resources1.e837a83f.svg",
    item2Detail1Text: "Sketch 组件",
    item2Detail2Img: "https://kingdee.design/static/design-resources2.addf9ce4.svg",
    item2Detail2Text: "Axure 组件",
    itemTitle3: "通用资源",
    item3Detail1Img: "https://kingdee.design/static/design-resources5.2ce4437f.svg",
    item3Detail1Text: "图标资源",
    item3Detail2Img: "	https://kingdee.design/static/design-resources6.7e17ffed.svg",
    item3Detail2Text: "插画资源"
};

const item3Props = {
    backgroundImage: "url('https://kingdee.design/static/design2.5736fcc6.svg')",
    firstTitle: "开发资源",
    secondTitle: "组件用于更快速、更简便的 Web 开发",
    itemTitle1: "PC端",
    item1Detail1Img: "https://kingdee.design/static/development-resources1.9249987c.svg",
    item1Detail1Text: "React 组件库",
    item1Detail2Img: "https://kingdee.design/static/development-resources2.53a08a34.svg",
    item1Detail2Text: "KDesign Pro",
    itemTitle2: "可视化",
    item2Detail1Img: "https://kingdee.design/static/development-resources3.8e64b442.svg",
    item2Detail1Text: "可视化图表组件库",
    item2Detail2Img: "https://kingdee.design/static/development-resources4.e02e3eba.svg",
    item2Detail2Text: "可视化大屏脚手架",
    itemTitle3: "通用资源",
    item3Detail1Img: "	https://kingdee.design/static/development-resources5.bf5730ce.svg",
    item3Detail1Text: "React SVG 图标库",
    item3Detail2Img: "https://kingdee.design/static/development-resources6.fff8aad8.svg",
    item3Detail2Text: "Vue SVG 图标库"
};

export default function ItemContainer(){
    return(
        <div className="contain">
            <SystemItem {...item1Props}></SystemItem>
            <SystemItem {...item2Props}></SystemItem>
            <SystemItem {...item3Props}></SystemItem>
        </div>
    );
};