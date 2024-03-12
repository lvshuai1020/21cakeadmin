import styles from '../config.less';
import Banner from './banner';
import Coupon from "./couponList";
import Image from "./image"


interface CompontentItem {
    id: number,
    name: string,
    uid: number
}


interface StateComponts {
    checkdCompontent?: Array<CompontentItem>,
    compontentItem: CompontentItem,
    id: number
    onGetClickCheckItem: (data: CompontentItem) => void
}





const Componts: React.FC<StateComponts> = (props) => {
    let { compontentItem, onGetClickCheckItem } = props
    let mapList: React.FC[] = [Banner, Coupon, Image]
    return <div onClick={() => {
        onGetClickCheckItem(compontentItem)
    }}>{mapList[compontentItem.id - 1](props)}</div>
}





export default Componts