import React, { Component } from 'react'
import PlannerGrid from '../Components/PlannerGrid'

class PlannerPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      plans: [
        { date: '23 Oct', day: 'Friday' },
        { date: '24 Oct', day: 'Awesomeday' },
      ],
    }
  }

  componentDidMount() {
    this.setState({
      plans: [
        { date: '23 Oct', day: 'Friday' },
        { date: '24 Oct', day: 'Awesomeday' },
      ],
    })
    //get data from database
    //put into state
    console.log('hiyaaaa', this.state)
  }

  render() {
    return (
      <div className='wall'>
        <h2>Your plans:</h2>
        <PlannerGrid plans={this.state.plans} />
      </div>
    )
  }
}
export default PlannerPage
