import React from 'react'

const NewsItems = (props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <img src={!imageUrl ? "https://indiaeducationdiary.in/wp-content/uploads/2024/03/word-bubbles_1920x1080-1024x576.webp" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>{source}</span> </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItems
