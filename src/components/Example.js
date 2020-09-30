import React from 'react';
import {connect} from 'dva'
import {Button} from 'antd'

const Example = props => {
  return (
    <div>
      Example
      <h2>{props.example}</h2>
      <Button>Button</Button>
    </div>
  );
};

Example.propTypes = {
};
//https://github.com/sorrycc/blog/issues/18
export default connect(({example})=>({example})) (Example);
