import FooterBottom from "./bottom";
import FooterTop from "./top";
import './index.less';


export default function Footer(){
    return(
        <div className="footer">
            <FooterTop></FooterTop>
            <FooterBottom></FooterBottom>
        </div>
    );
};