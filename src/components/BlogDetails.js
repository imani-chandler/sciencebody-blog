import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config-firebase";


export default function BlogDetails() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const docRef = doc(db, "Articles", id);
    onSnapshot(docRef, (snapshot) => {
      setArticle({ ...snapshot.data(), id: snapshot.id });
    });
  }, []);
  return (
    <div className="blog-details">
      {article && (
        <div className="row">
          <div className="col-3">
            <img
              src={article.imageUrl}
              alt={article.title}
            />
          </div>
          <div className="col-9 mt-3">
            <h2>{article.title}</h2>
            <h5>Author: Oscar</h5>
            <div> Posted on: {article.createdAt.toDate().toDateString()}</div>
            <hr />
            <h4>{article.description}</h4>

            <div className="d-flex flex-row-reverse">
              <div className="pe-2">
                <p>{article.likes.length}</p>
              </div>
            </div>
            {/* comment  */}
          </div>
        </div>
      )}
    </div>
  );
}