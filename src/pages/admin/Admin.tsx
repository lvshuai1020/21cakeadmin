import { PageContainer } from '@ant-design/pro-components';
import { Link } from "umi"
import { Alert, Card, Typography } from 'antd';
import React from 'react';

const Admin: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer
      content='This page can only be viewed by admin'
    >
      <Card>
        {/* <div onClick={}>
          goDetail
        </div> */}

        <Link to="/admin/sub-page/admindetail">Users Page</Link>
      </Card>
    </PageContainer>
  );
};

export default Admin;
