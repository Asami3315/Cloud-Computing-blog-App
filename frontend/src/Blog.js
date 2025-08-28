import React from 'react';

function Blog() {
  return (
    <div className="container mt-5">
      <h1>📝 Welcome to the Blog Page!</h1>
      <p>This is a protected page that shows only after login.</p>

      <div className="card p-3 mt-4">
        <h3>Sample Post</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
          velit eget orci gravida porttitor. 
        </p>
      </div>

      <div className="card p-3 mt-3">
        <h3>Another Post</h3>
        <p>
          This is just a placeholder post. You can add real blog posts here later!
        </p>
      </div>
    </div>
  );
}

export default Blog;
