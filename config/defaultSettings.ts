import { ProLayoutProps } from '@ant-design/pro-components';
 
 

 
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'realDark',
  // 拂晓蓝
  colorPrimary: '#71442A',
  layout: 'side',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: false, 
  title: '21cake',
  // siderMenuType: "sub",
  pwa: false,
  // headerHeight: 48,
  logo: 'https://oss.51cocoa.com/themes/wap/img/logo.png',
  iconfontUrl: '',
  token: {
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
};

export default Settings;
