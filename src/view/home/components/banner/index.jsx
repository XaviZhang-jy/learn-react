import React from "react";
import { Carousel } from "@kdcloudjs/kdesign";
import "./index.less";

export default function Banner() {

    const carouselRef = React.useRef();
    const [isHovered, setIsHovered] = React.useState(false);


    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    //在执行 DOM 操作前，确保轮播组件实例已正确挂载
    React.useEffect(() => {
        if (!carouselRef.current) return;
        carouselRef.current.getRef().parentNode.style.display = "flex";
    }, [carouselRef]);

    const bannerPicture = [
        'https://kui.kingdee.com/kd/api/static/banner/product/ea09dfdb6b73f2f90732516a7636437f.svg',
        'https://kui.kingdee.com/kd/api/static/banner/product/ea09dfdb6b73f2f90732516a7636437f.svg',
        'https://kui.kingdee.com/kd/api/static/banner/product/7ee6766e03bbb6e2fdacec19da6d8e8b.svg'
    ]

    return (
        <div style={{ display: "flex", flexDirection: "column", height: '332px'}}
        onMouseEnter={handleMouseEnter} // 添加 onMouseEnter 事件处理程序
        onMouseLeave={handleMouseLeave} // 添加 onMouseLeave 事件处理程序
        >
            <Carousel name="Carousel" ref={carouselRef} dots={isHovered} autoplay={true} jumpNode={isHovered}>
                {bannerPicture
                    .map((picture, i) => {
                        return (
                            <div className="banner-picture" style={{
                                backgroundImage: `url(${picture})`,//这里的用法记一下
                                cursor:'pointer'
                                }} key={i}>
                                {/* key={i}的作用：性能优化：使用 key 可以帮助 React 优化更新过程。React 会使用 key 来跟踪每个元素的状态，从而只更新发生了变化的元素，而不是重新渲染整个列表。
                                元素识别：在没有 key 的情况下，当您改变了数组中的元素顺序、添加或删除元素时，React 会遇到困难，因为它无法准确地知道哪些元素发生了变化，从而可能导致不正确的更新。 */}
                            </div>
                        );
                    })}
            </Carousel>
        </div>
    );
}
