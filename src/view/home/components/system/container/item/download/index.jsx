import { Button, Icon } from '@kdcloudjs/kdesign';
import './index.less';

export default function DownloadArrow(){
    return(
        <div className="download-arrow">
            <Button type='text' className='download-bottom'>
                <Icon type='put-bottom'></Icon>
            </Button>
        </div>
    );
};