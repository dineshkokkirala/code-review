import React, { Component } from 'react'
import "./Header.css"

export class PendingReviews extends Component {
    state={
        pendingReviews:[]
    }

    getPendingReviews=async()=>{
        const url = "/api/reviews/all";
        const options = {
            method:"GET"
        }
        const res = await fetch(url,options);
        const data = await res.json();
        const filteredReviews = data.filter((review)=>review.status!==2);
        //console.log(filteredReviews);
        this.setState({pendingReviews:filteredReviews})
    }

    componentDidMount=async()=>{
        this.getPendingReviews();
    }

  render() {
    return (
      <div className='container p-4'>
        <h2>Pending Reviews</h2>
        {this.state.pendingReviews.map((review)=>(
            <div className='custom-deployable-pending p-3 mt-3'>
                <h5>{review.deployable}</h5>
            </div>
        ))}
      </div>
    )
  }
}

export default PendingReviews