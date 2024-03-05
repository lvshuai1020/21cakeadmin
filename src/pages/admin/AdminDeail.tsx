import { PageContainer } from '@ant-design/pro-components';
import { useIntl } from '@umijs/max';
import { Alert, Card, Typography } from 'antd';
import React from 'react';

const AdminDeail: React.FC = () => {
  const intl = useIntl();
  return (
    <PageContainer
      content={intl.formatMessage({
        id: 'pages.admin.subPage.title',
        defaultMessage: 'This page can only be viewed by admin11111',
      })}
    >
      <Card>
        AdminDeailAdminDeailAdminDeail
      </Card>

    </PageContainer>
  );
};

export default AdminDeail;
