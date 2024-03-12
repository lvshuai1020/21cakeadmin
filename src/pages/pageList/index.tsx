import { addRule, removeRule, rule, updateRule } from '@/services/ant-design-pro/api';
import { PlusOutlined } from '@ant-design/icons';
import type { ActionType, ProColumns, ProDescriptionsItemProps } from '@ant-design/pro-components';
import {
    FooterToolbar,
    ModalForm,
    PageContainer,
    ProDescriptions,
    ProFormText,
    ProFormTextArea,
    ProTable,
} from '@ant-design/pro-components';
import { Button, Drawer, Input, message } from 'antd';
import React, { useRef, useState } from 'react';
import { FormattedMessage, } from 'umi';
import { history, Link } from 'umi'
/**
 * @en-US Add node
 * @zh-CN 添加节点
 * @param fields
 */

/**
 * @en-US Update node
 * @zh-CN 更新节点
 *
 * @param fields
 */

/**
 *  Delete node
 * @zh-CN 删除节点
 *
 * @param selectedRows
 */

const PageList: React.FC = () => {
    /**
     * @en-US Pop-up window of new window
     * @zh-CN 新建窗口的弹窗
     *  */
    const [createModalVisible, handleModalVisible] = useState<boolean>(false);
    /**
     * @en-US The pop-up window of the distribution update window
     * @zh-CN 分布更新窗口的弹窗
     * */
    const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false);

    const [showDetail, setShowDetail] = useState<boolean>(false);

    const actionRef = useRef<ActionType>();
    const [currentRow, setCurrentRow] = useState<API.RuleListItem>();
    /**
     * @en-US International configuration
     * @zh-CN 国际化配置
     * */

    const columns: ProColumns<API.RuleListItem>[] = [
        {
            title: (
                <FormattedMessage
                    id="pages.searchTable.updateForm.ruleName.nameLabel"
                    defaultMessage="Rule name"
                />
            ),
            dataIndex: 'name',
            tip: 'The rule name is the unique key',
            render: (dom, entity) => {
                return (
                    <a
                        onClick={() => {
                            setCurrentRow(entity);
                            setShowDetail(true);
                        }}
                    >
                        {dom}
                    </a>
                );
            },
        },
        {
            title: <FormattedMessage id="pages.searchTable.titleDesc" defaultMessage="Description" />,
            dataIndex: 'desc',
            valueType: 'textarea',
        },
        {
            title: (
                <FormattedMessage
                    id="pages.searchTable.titleCallNo"
                    defaultMessage="Number of service calls"
                />
            ),
            dataIndex: 'callNo',
            sorter: true,
            hideInForm: true,
            renderText: (val: string) => 'val'

        },
        {
            title: <FormattedMessage id="pages.searchTable.titleStatus" defaultMessage="Status" />,
            dataIndex: 'status',
            hideInForm: true,
            valueEnum: {
                0: {
                    text: (
                        <FormattedMessage
                            id="pages.searchTable.nameStatus.default"
                            defaultMessage="Shut down"
                        />
                    ),
                    status: 'Default',
                },
                1: {
                    text: (
                        <FormattedMessage id="pages.searchTable.nameStatus.running" defaultMessage="Running" />
                    ),
                    status: 'Processing',
                },
                2: {
                    text: (
                        <FormattedMessage id="pages.searchTable.nameStatus.online" defaultMessage="Online" />
                    ),
                    status: 'Success',
                },
                3: {
                    text: (
                        <FormattedMessage
                            id="pages.searchTable.nameStatus.abnormal"
                            defaultMessage="Abnormal"
                        />
                    ),
                    status: 'Error',
                },
            },
        },

        {
            title: <FormattedMessage id="pages.searchTable.titleOption" defaultMessage="Operating" />,
            dataIndex: 'option',
            valueType: 'option',
            render: (_, record) => [
                <a

                    onClick={() => {
                        history.push({
                            pathname: '/page/config'
                        })
                    }}
                >
                    修改
                </a>,

            ],
        },
    ];

    return (
        <PageContainer>
            <ProTable<API.RuleListItem, API.PageParams>

                rowKey="key"
                search={{
                    labelWidth: 120,
                }}

                request={rule}
                columns={columns}
            />


        </PageContainer>
    );
};

export default PageList;
