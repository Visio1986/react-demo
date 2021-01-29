import React, { Component } from 'react';
import { Button } from 'antd';
import '../src 引入antd组件库/node_modules/antd/dist/antd.css';
import { StepBackwardOutlined } from '@ant-design/icons';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary Button</Button>
        <StepBackwardOutlined />
      </div>
    )
  }
}
