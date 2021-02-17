import React, { Component } from 'react';
import '../../../node_modules/antd/dist/antd.css';
import { Button, Select } from 'antd';
const { Option } = Select;

export default class Count extends Component {
  state = { value: 1 }
  handleChange = (value) => {
    console.log(`selected ${value}`);
    this.setState({ value: value })
  }
  increment = () => {
    const { value } = this.state;
  }
  decrement = () => {
    const { value } = this.state;
  }
  incrementIfOdd = () => {
    const { value } = this.state;
  }
  incrementAsync = () => {
    const { value } = this.state;
  }
  render() {
    return (
      <div>
        <h5>当前求和为:</h5>
        <Select defaultValue="1" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
        <div>
          <hr />
          <Button onClick={this.increment} type="primary">+</Button>&nbsp;&nbsp;
          <Button onClick={this.decrement} type="primary">-</Button>&nbsp;&nbsp;
          <Button onClick={this.incrementIfOdd} type="primary">奇数加</Button>&nbsp;&nbsp;
          <Button onClick={this.incrementAsync} type="primary">异步加</Button>
        </div>
      </div>
    )
  }
}
