import React from 'react'
import { Table } from 'antd';
function ArtcleTable(props) {
    let column=[
        {title:'标题',dataIndex:'title',key:'title'},
        {title:'栏目',dataIndex:'column',key:'column'},
        {title:'内容',dataIndex:'content',key:'content',width:400},
        {title:'创建时间',dataIndex:'createTime',key:'createTime'},
    ]
    let{data,loading}=props;
    
    data=data.toJSON();
    return(
        <Table 
        rowKey={artcle => artcle.id}
        columns={ column } 
        dataSource={ data } 
        loading={loading}
        />
    )
}
export default ArtcleTable;