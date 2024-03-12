
import React from 'react';
import styles from '../config.less';
interface CompontentItem {
    // id: number,
    // name: string,
    memcCode: string;
    cpnsId: number;
    memcEnabled: boolean;
    memcSource: string;
    disabled: boolean;
    memcIsvalid: boolean;
    startDate: string;
    endDate: string;
    memcGenTime: string;
    isMembershipCardCoupon: boolean;
    redPoint: boolean;
    canUseStatus: boolean;
    cCpnsId: number;
    cpnsName: string;
    cpnsStatus: number;
    ruleId: number;
    cCanShare: number;
    canShare: boolean;
    from: string;
    to: string;
    sRuleId: number;
    ruleName: string;
    description: string;
    fromTime: string;
    toTime: string;
    memberLvIds: string;
    saleareaIds: string;
    ruleStatus: boolean;
    timeType: number;
    overdueDay: string;
    ccCouponCode: string;
    status: number;
    ccCanShare: string;
}

interface CouponState {
    item: CompontentItem,
    id: number
}

interface CouponListProps {
    checkdCompontent?: Array<CompontentItem>,
    // couponList?: Array<CompontentItem>,
    id: number
}



const Coupon: React.FC<CouponState> = (props) => {

    let { item: { cpnsName }, id } = props
    return <div data-id={id}>
        {cpnsName}
    </div>
}


const CouponList: React.FC<CouponListProps> = (props) => {
    let { id } = props

    const couponList: Array<CompontentItem> = [
        {
            cCanShare: 3,
            cCpnsId: 13862,
            canShare: false,
            canUseStatus: true,
            ccCanShare: "3",
            ccCouponCode: "BXRLFU858FAD",
            cpnsId: 13862,
            cpnsName: "新客权益-5选1",
            cpnsStatus: 1,
            description: "5款产品任选免费试吃，30天内有效。↵用券指引：选商品-购物车-结算-优惠券-赠品↵规则说明：指定用户专属权益，不与其他优惠同享，不兑现、不找零、不补发↵商品存在变化，请以实际赠品为准↵注：满50元可用，免运费12元",
            disabled: false,
            endDate: "1695776766",
            from: "2023-08-28 09:06",
            fromTime: "0",
            isMembershipCardCoupon: false,
            memberLvIds: "1,2",
            memcCode: "BXRLFU858FAD",
            memcEnabled: true,
            memcGenTime: "1693184766",
            memcIsvalid: true,
            memcSource: "membership",
            overdueDay: "30",
            redPoint: true,
            ruleId: 2474,
            ruleName: "优惠劵规则-新客权益-5选1",
            ruleStatus: true,
            sRuleId: 2474,
            saleareaIds: "1,2,3,4,5,6,7,8,10",
            startDate: "1693184766",
            status: 3,
            timeType: 1,
            to: "2023-09-27 09:06",
            toTime: "0",
        }
    ]

    return (<>
        {
            couponList.map((item: CompontentItem) => {
                return <Coupon item={item} id={id} key={item.cCpnsId}></Coupon>
            })

        }</>)
}


export default CouponList