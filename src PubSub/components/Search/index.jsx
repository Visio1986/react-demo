import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  search = () => {
    PubSub.publish('atguigu', { isFirst: false, isLoading: true })
    const { keyWordElement: { value } } = this;
    /*  // this.props.updateAppState({ isFirst: false, isLoading: true })
    axios.get(`http://localhost:3000/api1/search/users?q=${value}`).then(
      response => {
        // this.props.updateAppState({ users: response.data.items, isLoading: false })
      },
      error => {
        // this.props.updateAppState({ isLoading: false, err: error.message })
      }
    )*/
    axios.get(`http://localhost:3000/api1/search/users2?q=${value}`).then(
      response => {
        PubSub.publish('atguigu', { users: response.data.items, isLoading: false })
      },
      error => {
        PubSub.publish('atguigu', { isLoading: false, err: error.message })
      }
    )
  }
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索用户</h3>
        <div>
          <input type="text" placeholder="请输入关键字" ref={c => this.keyWordElement = c} />&nbsp;<button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
