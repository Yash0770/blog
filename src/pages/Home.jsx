import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full w-100 py-4 mt-4 text-center">
        <Container>
          <div className="d-flex flex-wrap">
            <div className="p-2 w-100 1-full">
              <h1>Login to read posts</h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className="w-full w-100 py-4">
      <Container>
        <div className="d-flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2">
              {/* <PostCard post={post} /> */}
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
