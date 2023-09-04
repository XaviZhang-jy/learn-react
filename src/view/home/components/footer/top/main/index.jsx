import './index.less';

export default function FooterMain(){

    const data = [
        {id:'1',url:'https://www.kingdee.com/',content:'金蝶官网'},
        {id:'2',url:'https://dev.kingdee.com/',content:'开发者门户'},
        {id:'3',url:'https://club.kdcloud.com/ifinclub/56403552855748352',content:'开发者社区'},
        {id:'4',url:'https://vip.kingdee.com/school',content:'金蝶学习与成长中心'},
        {id:'5',url:'https://kingdee.design/footer/page/protocol',content:'用户协议'},
        {id:'6',url:'https://account.kdcloud.com/privacy?id=3515729708820185088',content:'金蝶中国隐私政策'}];

    return(
        <div className="footer-main">
            <div className="footer-main-item">
                <div style={{color:' #fff',opacity:' .7',fontSize:' 14px'}}>邮箱:</div>
                <div style={{fontSize: '16px',marginTop: '10px',display: 'flex',maxWidth: '620px'}}>KUX@kingdee.com</div>
            </div>
            <div className="footer-main-item">
                <div style={{color:' #fff',opacity:' .7',fontSize:' 14px'}}>快速链接：</div>
                <div style={{fontSize: '16px',marginTop: '10px',display: 'flex',maxWidth: '620px'}}>
                    {data.map((item)=>(
                        <a key={item.id} href={item.url} target="_black">{item.content}</a>
                    ))}
                </div>
            </div>
        </div>
    );
};