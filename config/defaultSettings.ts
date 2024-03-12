import { ProLayoutProps } from '@ant-design/pro-components'; 
 
const Settings: ProLayoutProps & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light', 
  colorPrimary: '#71442A',
  
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: true,
  fixSiderbar: true,
  colorWeak: true, 
  title: '21cake',  
  pwa: false, 
  logo: 'https://oss.51cocoa.com/themes/wap/img/logo.png',
  iconfontUrl: '', 
};

export default Settings;
