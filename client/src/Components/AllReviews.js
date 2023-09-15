import React, { Component } from 'react'
import "./Header.css"

export class AllReviews extends Component {
    state={
        completedReviews:[]
    }

    getCompletedReviews=async()=>{
        const url = "/api/reviews/all";
        const options = {
            method:"GET"
        }
        const res = await fetch(url,options);
        const data = await res.json();
        const filteredReviews = data.filter((review)=>review.status===2);
        //console.log(filteredReviews);
        this.setState({completedReviews:filteredReviews})
    }

    componentDidMount=async()=>{
        this.getCompletedReviews();
    }

  render() {
    return (
      <div className='container p-4'>
        <h2>Completed Reviews</h2>
        {this.state.completedReviews.map((review)=>(
            <div className='custom-deployable-completed p-3 mt-3'>
                <h5>{review.deployable}</h5>
            </div>
        ))}
      </div>
    )
  }
}

export default AllReviews