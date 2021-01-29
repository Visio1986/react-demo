import React, { Component } from 'react'
// import qs from 'querystring'
const DetailContent = [
  { id: '01', content: '123' },
  { id: '02', content: '1234' },
  { id: '03', content: '12345' },
]
export default class Detail extends Component {
  render() {
    // 接收params参数
    // const { id, title } = this.props.match.params;

    // 接收search参数
    // const { search } = this.props.location;
    // const { id, title } = qs.parse(search.slice(1))

    // 接收state参数
    const { id, title } = this.props.location.state || {};
    const findContent = DetailContent.find((item) => {
      return item.id === id
    }) || {}
    return (
      <div>
        <p>ID:{id}</p>
        <p>TITLE:{title}</p>
        <p>CONTENT:{findContent.content}</p>
      </div>
    )
  }
}
