import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const BlogList = ({blogs, title}) => {
    //useEffect(() => {
    //     blogs.forEach(blog => {
    //         let file = new Blob(blog.imageURL)
    //         let fileUrl = URL.createObjectURL(file)
    //         blog.imageURL = fileUrl
    //         console.log(blog.imageURL)
    //     })
    // }, []
    // )
    console.log(blogs)
    return ( 
        <div className="blog-list">
            
                <div className="case">
                    <div className="row">
                        <div className="col">
                            <h1>Blogs</h1>
                        </div>
                    </div>
                </div>
                
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <img alt={blog.title} src={blog.imageURL} height={100}></img>
                        <p>Written by {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;