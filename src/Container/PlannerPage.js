import React, { Component } from 'react'
import { db } from '../Config/fire'
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
    db.collection('days')
      .orderBy('date', 'asc')
      .onSnapshot((collection) => {
        const plans = collection.docs.map((doc) => doc.data())
        console.log('DAYS', plans)
        this.setState({ plans })
      })
  }

  handleParkChange(event) {
    console.log(event.target.value)
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
