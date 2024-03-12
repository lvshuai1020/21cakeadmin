
import React from 'react';
import styles from '../config.less';

interface StateComponts {

    // img?: string
    id?: number
}




const Image: React.FC<StateComponts> = (props) => {
    let { id } = props

    const img: string = 'https://oss.51cocoa.com/upload/images/20230808/e8ee29a61dec8ce5a693194a109c9177.jpg'
    return (
        <div className={styles.config_img}>
            <img className={styles.img} src={img} data-id={id}></img>
        </div>
    )
}


export default Image