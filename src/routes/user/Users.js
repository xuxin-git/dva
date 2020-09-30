import React from 'react'
import {connect } from 'dva'
import {Table,} from 'antd'
import Columns from './UserColumns'

const Users = props => {

  const UserColumns = Columns()
  const data = props.users.list
  return(
    <Table columns={UserColumns} dataSource={data} />
  )

}
export default connect(({users})=>({users})) (Users);


