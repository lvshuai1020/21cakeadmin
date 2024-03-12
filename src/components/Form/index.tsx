import { ProForm, ProFormRadio, ProFormText, ProFormList, ProFormUploadButton } from '@ant-design/pro-components';
import { Col, message, Row, Space } from 'antd';
import React, { useState } from 'react';

type LayoutType = Parameters<typeof ProForm>[0]['layout'];
const LAYOUT_TYPE_HORIZONTAL = 'vertical';
import FromFiled from "@/components/FromFiled"



const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};


interface configItem {
  type: string
  name: string
  fromList?: configItem[]
}

interface FormPropsData {
  formCofigList: configItem[]   // 表单每一项的配置
  name: string //表单名称
  outValue: (data: any) => void //z
  fromList?: configItem[]
}
interface BannerFormPropsData {
  formCofigList: configItem[]
  name: string
}



const FormList: React.FC<BannerFormPropsData> = (props) => {

  const { name, formCofigList } = props
  return (
    <>
      {
        formCofigList.map((item: configItem) => {
          return (
            item.type == 'formlist' ?
              <ProFormList
                name={name}
                label={name}
              >

                <ProForm.Group key="group">
                  {
                    item.fromList.map((itemt: configItem) => {
                      return <FromFiled item={itemt} />
                    })
                  }
                </ProForm.Group>

              </ProFormList> :
              <ProForm.Group key="group">
                <FromFiled item={item} />

              </ProForm.Group>



          )
        })
      }
    </>
  )

}




const From: React.FC<FormPropsData> = (props) => {
  const [formLayoutType, setFormLayoutType] = useState<LayoutType>(
    LAYOUT_TYPE_HORIZONTAL,
  );

  const formItemLayout =
    formLayoutType === LAYOUT_TYPE_HORIZONTAL
      ? {
        labelCol: { span: 14 },
        wrapperCol: { span: 30 },
      }
      : null;


  const { formCofigList, name, outValue } = props;

  return (
    <ProForm
      {...formItemLayout}
      layout={formLayoutType}
      submitter={{
        render: (props, doms) => {
          return formLayoutType === LAYOUT_TYPE_HORIZONTAL ? (
            <Row>
              <Col span={14} offset={4}>
                <Space>{doms}</Space>
              </Col>
            </Row>
          ) : (
            doms
          );
        },
      }}
      onFinish={async (values) => {
        outValue(values)
        // await waitTime(2000);
        // console.log(values);
        // message.success('提交成功');
      }}
      params={{}}
      request={async () => {
        await waitTime(100);
        return {
          name: '蚂蚁设计有限公司',
          useMode: 'chapter',
        };
      }}
    >
      {<FormList formCofigList={formCofigList} name={name}></FormList>}

    </ProForm>
  );
};

export default From