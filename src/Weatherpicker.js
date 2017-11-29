import React, { Component } from 'react'
import axios from 'axios'
import ListWeather from './ListWeather'
// import DATA from './data.js'
import './index.css'

class Weatherpicker extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      data: [],
      val: '' 
    }
    this.loadAPIdata = this.loadAPIdata.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.parseData = this.parseData.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  loadAPIdata() {

    const BASEurl = 'http://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=dfb1a1a6521e3fa00fd54f9b0a3f45d9'
    // const { BASEurl } = this.props
    // Axios alternative:
    // axios.get(GETurl)
    //   .then(res => {
    //     this.setState({ data: res.data })
    //   })

    // Fetch Alternative (for GET, fetch works just fine):
    
    fetch(BASEurl) 
    .then(response => {
      return response.json()
      console.log(`called ${BASEurl} `);
    })
    .then(json => {
      this.setState({ data: json })
    })
    .catch(error => {
      console.log(`failed to fetch from ${BASEurl}`)
    })
  }

  handleSelect(e) {
    this.setState({ val: e.target.value })
  }

  handleSubmit(e) {
    var POSTurl = 'www.futurestaybeta.com/test3.php'

    var { val } = this.state
    
    axios.post(POSTurl, val)
    .then(res => {
      console.log(`${res.json()} POSTed to ${POSTurl}`);
      // this.loadAPIdata()  
    })
    .catch(err => {
      console.error(err) 
    })

  }

  parseData(data, dayNum, opt) {
    if (opt = "day") {
      var date = new Date(data.list[dayNum].dt)
      var str = date.ToDateString()
      return str
    } else {
      var pres = data.list[dayNum].main.pressure
      return pres
    }
  }

  componentDidMount() {
    this.loadAPIdata();
  }

  render() {
    var { data } = this.state
    // if (typeof data === "undefined") {
    //   var data = DATA
    // }
    console.log("data.messages in Weatherpicker: ", data.messages);
    return (
      <div className="Weatherpicker">
        <h2>Pick the Day you will go out based on the pressure that day:</h2>
        
        <p>Select if you prefer...</p>
        <ListWeather 
          data={ this.state.data }
          handleSubmit={this.handleSubmit}
          parseData={this.parseData}
          handleSelect={this.handleSelect}
          val={this.val} 

        />
        
      </div>
    )
  }
}

export default Weatherpicker;
