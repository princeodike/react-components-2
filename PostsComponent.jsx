
import { useState, useEffect } from "react";
import "./PostsComponent.css";

const PostsComponent = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        const fetchPosts = async () => {

            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");

                if (!response.ok) {
                    throw new Error("Something went wrong");
                }

                const data = await response.json();

                setPosts(data);
                setLoading(false);

            } catch (error) {
                setError("Failed to fetch posts");
                setLoading(false);
            }

        }

        fetchPosts();

    }, []);

    return (
        <div className="posts-container">

            <h1>Posts from API</h1>

            {
                loading && <h2>Loading posts...</h2>
            }

            {
                error && <h2>{error}</h2>
            }

            <div className="post-list">

                {
                    posts.map((each) => (

                        <div className="post-card" key={each.id}>

                            <h3>{each.title}</h3>

                            <p>{each.body}</p>

                        </div>

                    ))
                }

            </div>

        </div>
    );
};

export default PostsComponent;
