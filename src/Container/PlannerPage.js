import React, { Component } from 'react'
import { db } from '../Config/fire'
import PlannerGrid from '../Components/PlannerGrid'
import TimerBox from '../Components/Timers/TimerBox'

class PlannerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plans: [],
    }
    this.handleParkChange = this.handleParkChange.bind(this)
  }

  componentDidMount() {
    db.collection('days')
      .orderBy('id', 'asc')
      .onSnapshot((collection) => {
        const plans = collection.docs.map((doc) => doc.data())
        this.setState({ plans })
      })
  }

  handleParkChange(event) {
    console.log(event.target.value)
  }

  render() {
    return (
      <div className='wall'>
        <TimerBox />
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
