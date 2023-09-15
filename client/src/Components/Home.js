import React, { Component } from 'react'
import "./Header"

export class Home extends Component {

    state={
        reviews:[],
    }

    getReviews=async()=>{
        const url = "/api/reviews/all";
        const options = {
            method:"GET",
        }
        const res = await fetch(url,options);
        const data = await res.json();
        //console.log(data);
        this.setState({reviews:data});
       // console.log(this.state.reviews)
    }
    
    componentDidMount=async()=>{
        this.getReviews();
    }

  render() {
    return (
    <div className='container'>
        {this.state.reviews.map((review)=>(
            <div className='p-3 custom-deployable mt-2'>
                <div>    
                    <h6>{review.deployable}</h6>
                    <div className='reviews-custom'>
                        <span className={review.status===0?"custom-cicles bg-warning":(review.status===1||review.status===2)?"bg-success custom-cicles":"custom-cicles"}></span>
                        <span className={review.status===1?"custom-cicles bg-warning":review.status===2?"custom-cicles bg-success":"custom-cicles"}></span>
                        <span className={review.status===2?"custom-cicles bg-warning":"custom-cicles"}></span>
                    </div>
                </div>
                <div>
                    <h6>Update</h6>
                </div>
                <div>
                    <h6>Delete</h6>
                </div>
            </div>
        ))}
    </div>
    )
  }
}

export default Home