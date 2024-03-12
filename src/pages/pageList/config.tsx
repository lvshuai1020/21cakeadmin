import { connect } from "umi"
import React, { useState, } from 'react';
import { Card } from 'antd';
import styles from './config.less';
import classNames from 'classnames';
import Componts from "./componts";
import From from "@/components/Form"
interface CompontentItem {
  id: number,
  name: string
}

interface CheckedCompontentItem {
  id: number,
  name: string
  uid: number
}

interface ComponentItemProps {
  compontList: CompontentItem[]
}

interface AppwebProps {
  checkdCompontent?: Array<CheckedCompontentItem>,  // 选中的
  onGetCheckCompont: (data: CheckedCompontentItem) => void
  onGetCheckCompontItem: (data: CheckedCompontentItem) => void
  changeCheckdCompontent: (data: Array<CheckedCompontentItem>) => void
}

interface PageDataForm {
  checkdCompontentItem: CheckedCompontentItem
}



//  pagecofig 页面左边的组件
const ComponentList: React.FC<ComponentItemProps> = (props) => {
  let { compontList } = props;

  return (

    <div className={styles.compontent_content}>
      <Card>
        {
          compontList.map((item: CompontentItem) => {
            return <div
              className={classNames(styles.btn_item)}
              draggable
              key={item.id}
              onDragStart={(e) => {
                e.dataTransfer.setData('itemData', JSON.stringify(item))
              }}
            >
              {item.name}
            </div>
          })
        }
      </Card>

    </div>

  )
}



// pagecofig 页面中间的组件
const Appweb: React.FC<AppwebProps> = (props) => {
  const { checkdCompontent, onGetCheckCompontItem, changeCheckdCompontent, onGetCheckCompont } = props;

  //  获取拖拽进来的组件
  const handleDrop = (e: any) => {
    const { dataset: { id } } = e.target
    let configItemData: string = e.dataTransfer.getData('configItemData')
    if (!configItemData) {
      return
    }
    const curData = JSON.parse(configItemData) as CheckedCompontentItem;
    const diffData: Array<CheckedCompontentItem> = checkdCompontent ? checkdCompontent.filter((item: CheckedCompontentItem) => item.uid !== curData.uid) : []
    if (!id) return

    const index = diffData.findIndex((item: CheckedCompontentItem) => item.uid == id);
    diffData.splice(index, 0, curData)
    changeCheckdCompontent(diffData)
  }

  // 获取点中的组件  
  const clidkChangeCheckItem = (e: CheckedCompontentItem) => {
    onGetCheckCompontItem(e)
  }

  return <div className={styles.app_pages}
    onDragOver={(e) => {
      e.stopPropagation();
      e.preventDefault();
    }}
    onDrop={(e) => {
      e.stopPropagation();
      let data: string = e.dataTransfer.getData('itemData')
      if (data) {
        const curData = JSON.parse(data)
        onGetCheckCompont(curData)
      }
    }} >
    <div draggable={false} className={styles.page_title} >页面属性</div>
    <div
      onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)}
      onDragOver={(e: React.DragEvent<HTMLDivElement>) => { e.preventDefault() }}
      onDragEnter={(e: React.DragEvent<HTMLDivElement>) => { e.preventDefault() }}
      onDragLeave={(e: React.DragEvent<HTMLDivElement>) => { e.preventDefault() }}
    >
      {
        checkdCompontent && checkdCompontent.map((item: CheckedCompontentItem, index: number) => {
          return (
            <div
              className={styles.config_page_item}
              draggable
              onDragStart={(e) => {
                var img = new Image();
                img.src = ''
                e.dataTransfer.setDragImage(img, 10, 10);
                e.dataTransfer.setData('configItemData', JSON.stringify(item))
              }}

            >
              <Componts compontentItem={item} id={item.uid} onGetClickCheckItem={clidkChangeCheckItem} />

            </div>
          )
        })}
    </div>
  </div>
}


// pagecofig 页面右边的组件
const PageData: React.FC<PageDataForm> = (props) => {
  const { checkdCompontentItem } = props;


  const bannerConfig = [
    {
      type: 'formlist',
      name: 'banner',
      fromList: [

        {
          type: 'img',
          name: 'banneritem',

        }
      ]
    }
  ]

  const couponConfig = [
    {
      type: 'coupon',
      name: 'coupon'
    }
  ]

  const imgConfig = [
    {
      type: 'img',
      name: 'imgsrc'
    }
  ]


  //  选中组件的提交
  const getOutVakue = (e) => {
    console.log('---', e)
  }

  return <div className={styles.page_data}>
    <Card>
      {
        checkdCompontentItem.id > 0 ?
          <From formCofigList={[[], bannerConfig, couponConfig, imgConfig][checkdCompontentItem.id]} name={checkdCompontentItem.name} outValue={getOutVakue}></From> :
          <div>
            选择组件填写
          </div>
      }
    </Card>
  </div>
}




const configPage: React.FC = () => {
  const compontList = [
    { id: 1, name: 'banner' },
    { id: 2, name: 'coupons' },
    { id: 3, name: 'imgs' },
  ]

  const [checkdCompontent, setcheckdCompontent] = useState<Array<CheckedCompontentItem>>([]);  // 页面中间组件列表
  const [checkdCompontentItem, setcheckdCompontentItem] = useState<CheckedCompontentItem>({ id: 0, name: '', uid: 0 });  //填写或者修改选中的组件数据



  // 添加组件列表
  const getcheckdCompontentList = (data: CompontentItem) => {
    let newData: CheckedCompontentItem = {
      uid: checkdCompontent.length * 1 + 1, ...data
    }
    setcheckdCompontent([...checkdCompontent, newData])
    setcheckdCompontentItem(newData)
  }

  // 修改组件列表
  const onChangeCheckdCompontent = (data: Array<CheckedCompontentItem>) => {
    setcheckdCompontent([...data])
  }

  // 选中组件列表中的组件 
  const getClickCheckCompont = (data: CheckedCompontentItem) => {
    setcheckdCompontentItem(data)
  }

  return (
    <div className={styles.content}
      onDragOver={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >

      <ComponentList compontList={compontList} />
      <Appweb checkdCompontent={checkdCompontent} onGetCheckCompont={getcheckdCompontentList} changeCheckdCompontent={onChangeCheckdCompontent} onGetCheckCompontItem={getClickCheckCompont} />
      <PageData checkdCompontentItem={checkdCompontentItem} />
    </div>
  )
}



export default connect(({ }) => ({
}))(configPage)

