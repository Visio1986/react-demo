import React, { Component } from 'react';
import '../../../node_modules/antd/dist/antd.css';
import { Button, Select } from 'antd';
const { Option } = Select;

export default class Count extends Component {
  state = { count: 0 }
  handleChange = (value) => {
    console.log(`selected ${value}`);
    const { count } = this.state;
    this.setState({ count: count, value: value })


  }
  increment = () => {
    const { count, value } = this.state;
    this.setState({ count: count + value * 1 })
  }
  decrement = () => {
    const { count, value } = this.state;
    this.setState({ count: count - value * 1 })
  }
  incrementIfOdd = () => {
    const { count, value } = this.state;
    if (count % 2 !== 0)
      this.setState({ count: count + value * 1 })
  }
  incrementAsync = () => {
    const { count, value } = this.state;
    setTimeout(() => {
      this.setState({ count: count + value * 1 })
    }, 500)
  }
  render() {
    return (
      <div>
        <h5>当前求和为:{this.state.count}</h5>
        <Select defaultValue="1" style={{ width: 120 }} onChange={this.handleChange}>
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
        </Select>
        <div>
          <Button onClick={this.increment} type="primary">+</Button>
          <Button onClick={this.decrement} type="primary">-</Button>
          <Button onClick={this.incrementIfOdd} type="primary">奇数加</Button>
          <Button onClick={this.incrementAsync} type="primary">异步加</Button>
        </div>
      </div>
    )
  }
}
