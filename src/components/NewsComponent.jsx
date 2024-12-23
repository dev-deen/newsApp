import React, { Component } from 'react'

export class NewsComponent extends Component {
  render() {
    const {currNews} = this.props;
    let {urlToImage: imageUrl, title, description, url} = currNews || {};
    return (
        <div className="card m-3">
        <img src={imageUrl || 'https://via.placeholder.com/150'} 
          className="card-img-top img-fluid" 
          alt="..." 
          style={{height: "200px", objectFit:"cover"}}/>
        <div className="card-body">
          <h5 className="card-title">{title || 'Title'}</h5>
          <p className="card-text">{description || 'Description'}</p>
          <a href={url} className="btn btn-dark">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsComponent
