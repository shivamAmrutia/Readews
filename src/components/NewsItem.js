import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
   let {description , title , imageUrl , newsUrl} = this.props;
    return (
      <div>
        <div className="card mx-auto" style={{height:"25rem"}}>
            <img src={imageUrl} className="card-img-top" alt="..." style={{height:"12rem"}}/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsUrl} className="btn btn-primary" target="_blank" rel = "noreferrer">Read More</a>
            </div>
        </div>
      </div>
    )
  }
} 
