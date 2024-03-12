
import styles from '../config.less';
import { Carousel } from 'antd';
interface CompontentItem {
    id: number,
    name: string
}


interface StateComponts {
    checkdCompontent?: Array<CompontentItem>,
    onGetCheckItem?: (data: CompontentItem) => void
    id?: number
}




const Banner: React.FC<StateComponts> = (props) => {
    let { id } = props

    return (
        <div>
            <Carousel dots={false} autoplay className={styles.config_banner}>
                <div>
                    <div className={styles.contentStyle} data-id={id}>
                        1111111

                    </div>
                </div>
                <div  >
                    <div className={styles.contentStyle} data-id={id}>
                        222

                    </div>
                </div>
                <div >
                    <div className={styles.contentStyle} data-id={id}>
                        33

                    </div>
                </div>
                <div  >
                    <div className={styles.contentStyle} data-id={id}>
                        44

                    </div>
                </div>
            </Carousel>
        </div>
    )
}


export default Banner