import { ProForm, ProFormRadio, ProFormText, ProFormList, ProFormUploadButton, ProFormSelect } from '@ant-design/pro-components';

import { useState } from 'react';




interface FormItem {
  type: string
  name: string

}

interface FormFiledData {
  item: FormItem
}



const FormFiled: React.FC<FormFiledData> = (props) => {
  let { item } = props
  console.log('---', props)
  return (
    <>

      {
        item.type == 'img' ?
          <ProFormUploadButton
            name={item.name}
            label={item.name}
            max={1}
            accept=".jpg,.png"
            fieldProps={{
              name: item.name,
            }}
            action="/upload.do"
          /> : null
      }



      {
        item.type == 'coupon' ?
          <ProFormSelect
            name={item.name}
            label={item.name}
            valueEnum={{
              red: 'Red',
              green: 'Green',
              blue: 'Blue',
            }}
            fieldProps={{
              mode: 'multiple',
            }}
            placeholder="Please select favorite colors"
            rules={[
              {
                required: true,
                message: 'Please select your favorite colors!',
                type: 'array',
              },
            ]}
          /> : null

      }
    </>
  );
};

export default FormFiled