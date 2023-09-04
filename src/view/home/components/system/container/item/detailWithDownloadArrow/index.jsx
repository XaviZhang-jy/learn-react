
import React, { useState } from 'react';
import './index.less';
import DownloadArrow from '../download';

export default function DetailWithDownloadArrow(props) {
    const [hovered, setHovered] = useState(false);

    return (
        <div className={`detail ${hovered ? 'hovered' : ''}`}
            onMouseEnter={() => {
                if(props.title==='设计资源'){
                setHovered(true);
            }}}
            onMouseLeave={() => setHovered(false)}>
            <img src={props.img} alt="icon" />
            {props.text}
            {hovered && <DownloadArrow className="download-arrow" />}
        </div>
    );
}