import { useParams, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import useFetch from './useFetch';


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } =  useFetch('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <div  className='text-right'>
                <Link to={`/blog`}><Button size="lg"><i className="fa fa-arrow-left fa-lg" /></Button></Link>
                </div>
            </article>
            
        </div>
     );
}
 
export default BlogDetails;