import React from 'react'
import { Tabs } from '@kdcloudjs/kdesign'
import './index.less';
import Tab1 from './tabItem1';
import Tab2 from './tabItem2';


export default function SystemTabs() {
    const [curKey, setCurKey] = React.useState(1)

    const tabStyle = {
        width: '720px',
        height: '108px',
    }

    const change = (id) => {
        setCurKey(id);
        console.log('curKey:' + curKey);
    }

    return (
        <>
            <div style={{ width: '1180px', height: '540px', display: 'flex', justifyContent: 'center', marginTop: '37px' }}>
                <Tabs effect="fade" className='container-tabs' style={tabStyle} activeKey={curKey} onChange={change}>
                    <Tabs.TabPane className='tabs-nav' key={1} tab={<Tab1 number={curKey}/>}>
                        <div>
                            <div className="page-title">
                                <span>各种页面视觉标注,一键查看</span>
                                <a href="https://kingdee.design/pc/page/workbench/workbench" target="">查看所有页面标注</a>
                            </div>
                            <div className="preview-image">
                                <img src="https://kingdee.design/static/rule-info-image.ab588246.svg" alt="视觉标注" />
                            </div>
                        </div>
                    </Tabs.TabPane>
                    <Tabs.TabPane className='tabs-nav' key={2} tab={<Tab2 number={curKey}/>} >
                        <div> 
                            <div className="page-title">
                                <span>基于 React 的高代码实现，开源共享</span>
                                <a href="https://pro.kingdee.design/" target="">查看 KDesign React Pro</a>
                            </div>
                            <div className="preview-image">
                                <img src="https://kingdee.design/static/rule-develop-image.e014d5b4.svg" alt="搞代码开发" />
                            </div>
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>
    )
}