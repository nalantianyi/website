import Image from 'next/image';
import styles from  './index.module.css';

import policePic from '../../../public/police.jpg';

export default function Footer(){
    return <div className={styles.container}>
        <a href="https://beian.miit.gov.cn/" target="_blank">苏ICP备2023017552号-1</a>
        ｜
        <a className={styles.beian} target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32011502011867">
            <p style={{color:'#939393'}}><Image src={policePic} alt={'beian'}/>
            苏公网安备 32011502011867号
            </p></a>
        | GPL Licensed | Copyright © 2023 喵爸的小作坊，All rights reserved.</div>
}