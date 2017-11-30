import React, { Component } from 'react';

class ListWeather extends Component {
  constructor(props) {
    super(props)
    this.renderWeather = this.renderWeather.bind(this)
  }

  renderWeather(data) {
    return (
      <div className="ListWeather">
        <form className="submitWeather" onSubmit={ this.props.handleSubmit }>
        <select value={this.props.val} onChange={this.props.handleSelect}>
          <option value="Monday">pressure on {this.props.parseData(data, 0, "day")} : {this.props.parseData(data, 0, "pres")}</option> 
          <option value="Tuesday">pressure on {this.props.parseData(data, 7, "day")} : {this.props.parseData(data, 7, "pres")}</option>
          <option value="Wednesday">pressure on {this.props.parseData(data, 14, "day")} : {this.props.parseData(data, 14, "pres")}</option> 
          <option value="Thursday">pressure on {this.props.parseData(data, 21, "day")} : {this.props.parseData(data, 21, "pres")}</option>
          <option value="Friday">pressure on {this.props.parseData(data, 28, "day")} : {this.props.parseData(data, 28, "pres")}</option> 
          <option value="Saturday">pressure on {this.props.parseData(data, 35, "day")} : {this.props.parseData(data, 35, "pres")}</option> 
        </select>
        
        <input className="post" type="submit" value="Submit" />
      </form>
      </div>
    )
  }

  render() {
    var { data } = this.props
    // console.log("messages in  MessageList: ", messages)
    
    return (
      <div className="weatherList">
        { typeof data.list !== 'undefined'
          ? this.renderWeather(data)
          : <div></div>
        }
      </div>
    )
  }
}

export default ListWeather;