import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [imageURL, setImageURL] =useState("");
    const [author, setAuthor] = useState('Oscar');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, imageURL };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    }
    const handleImage = e => {
        console.log(e.target.files[0])
        const file = e.target.files[0]
        const fileURL = URL.createObjectURL(file)
        // let fileReader = new FileReader();
        // fileReader.onload = (event) => {
        // setImageURL(event.target.result)}
        // fileReader.readAsText(file)
        setImageURL(fileURL)
    };
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title</label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                />
                <label>Blog Image:</label>
                <input type="file" accept="image/*" multiple = "false"
                    required
                    onChange={handleImage}
                />
                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Oscar">Oscar</option>
                    <option value="Guest">Guest</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>
        </div>
     );
}
 
export default Create;