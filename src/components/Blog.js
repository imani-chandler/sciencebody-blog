import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../firebase/config-firebase";
import { Link } from "react-router-dom";

export default function Blog() {
  const [articles, setArticles] = useState([])
  useEffect(() => {
    const articleRef = collection(db, "Articles");
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setArticles(articles);
      console.log(articles);
    });
  }, []);
  return (
    <div className="blog-list">
      {articles.length === 0 ? (
        <p>No blogs found!</p>
      ) : (
        articles.map(
          ({
            id,
            title,
            description,
            imageUrl,
            createdAt,
            createdBy,
            likes,
            comments,
          }) => (
            <div className="blog-preview" key={id}>
              <div className="row">
                <div className="col-3">
                  <Link to={`/article/${id}`}>
                  <img
                    src={imageUrl}
                    alt="title"
                    height={100}
                  />
                  </Link>
                </div>
                <div className="col-9 ps-3">
                  <div className="row">
                    <div className="col-6">
                      {createdBy && (
                        <span className="badge bg-primary">{createdBy}</span>
                      )}
                    </div>
                    <div className="col-6 d-flex flex-row-reverse">
                    </div>
                  </div>
                  <h3>{title}</h3>
                  <p>{createdAt.toDate().toDateString()}</p>

                  <div className="d-flex flex-row-reverse">
                  </div>
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}