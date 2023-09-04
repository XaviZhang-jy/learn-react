import DetailWithDownloadArrow from './detailWithDownloadArrow';
import './index.less';
import React from 'react';

export default function SystemItem(props) {
    return (
        <div className="item">
            <div className="title" style={{ backgroundImage: props.backgroundImage }}>
                <span className="firstTitle">{props.firstTitle}</span>
                <span className="secondTitle">{props.secondTitle}</span>
            </div>
            <div className="content">
                <div>
                    <div className="item-title">{props.itemTitle1}</div>
                    <div className="item-content">

                        <DetailWithDownloadArrow
                        img={props.item1Detail1Img}
                        text={props.item1Detail1Text}
                        title={props.firstTitle}
                        />

                        <DetailWithDownloadArrow
                        img={props.item1Detail2Img}
                        text={props.item1Detail2Text}
                        title={props.firstTitle}
                        />
                    </div>
                </div>
                <div>
                    <div className="item-title">{props.itemTitle2}</div>
                    <div className="item-content">
                    <DetailWithDownloadArrow
                        img={props.item2Detail1Img}
                        text={props.item2Detail1Text}
                        title={props.firstTitle}
                        />

                        <DetailWithDownloadArrow
                        img={props.item2Detail2Img}
                        text={props.item2Detail2Text}
                        title={props.firstTitle}
                        />
                    </div>
                </div>
                <div>
                    <div className="item-title">{props.itemTitle3}</div>
                    <div className="item-content">
                    <DetailWithDownloadArrow
                        img={props.item3Detail1Img}
                        text={props.item3Detail1Text}
                        title={props.firstTitle}
                        />

                        <DetailWithDownloadArrow
                        img={props.item3Detail2Img}
                        text={props.item3Detail2Text}
                        title={props.firstTitle}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
