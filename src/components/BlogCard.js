import React from 'react'
import {Link} from 'react-router-dom';

const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date">18 Nov, 2023</p>
          <h5 className="title">A beautiful sunday morning renaissance</h5>
          <p className="desc">
            A beautiful sunday morning renaissance. A beautiful sunday morning
            renaissance . A beautiful sunday morning renaissance
          </p>
          <Link to="/" className="button">
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard