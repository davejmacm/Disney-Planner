import React, { Component } from 'react'
import PlannerGrid from '../Components/PlannerGrid'

class PlannerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plans: [],
    }
    this.handleParkChange = this.handleParkChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      plans: [
        { date: '23 Oct', day: 'Friday', park: 'Epcot' },
        { date: '24 Oct', day: 'Awesomeday', park: 'Magic Kingdom' },
        { date: '25 Oct', day: 'Awesomeday', park: '' },
        { date: '26 Oct', day: 'Awesomeday', park: '' },
        { date: '27 Oct', day: 'Awesomeday', park: '' },
        { date: '28 Oct', day: 'Awesomeday', park: '' },
        { date: '29 Oct', day: 'Awesomeday', park: '' },
        {
          date: '30 Oct',
          day: 'Halloweenday',
          park: 'Hollywood Studios',
        },
      ],
    })
    //get data from database
    //put into state
  }

  handleParkChange(event) {
    console.log(event.target.value)
    this.setState({ selectedParkValue: event.target.value })
  }

  render() {
    return (
      <div className='wall'>
        <h2>Your plans:</h2>
        <PlannerGrid
          plans={this.state.plans}
          handleParkChange={this.handleParkChange}
        />
      </div>
    )
  }
}
export default PlannerPage
