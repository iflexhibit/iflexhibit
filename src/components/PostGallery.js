import { useState } from "react";
import SortControls from "./SortControls";
import Image from "next/image";
import Pagination from "@material-ui/lab/Pagination";

const PostGallery = () => {
  const [sort, setSort] = useState(items[0]);
  const handleSort = (e) => {
    setSort(e.target.name);
  };
  return (
    <div className="posts">
      <SortControls items={items} sortBy={sort} handleSort={handleSort} />
      <div className="gallery">
        {posts.map((post, index) => (
          <div className="card" key={index}>
            <Image
              src={post?.image}
              layout="fill"
              objectFit="cover"
              alt={post?.title}
            />
            <div className="card-info">
              <div className="card-info-group">
                <div className="card-info-group-item">
                  <span>{post?.title}</span>
                </div>
                <div className="card-info-group-item">
                  <div className="avatar">
                    <Image
                      src={post?.author?.avatar}
                      objectFit="cover"
                      layout="fill"
                      alt={post?.author?.username}
                    />
                  </div>
                  <span>{post?.author?.username}</span>
                </div>
              </div>
              <div className="card-info-group">
                <div className="card-info-group-item">
                  <span>{post?.likes?.toLocaleString()}</span>
                  <i className="fas fa-thumbs-up" aria-hidden></i>
                </div>
                <div className="card-info-group-item">
                  <span>{post?.views?.toLocaleString()}</span>
                  <i className="fas fa-eye" aria-hidden></i>
                </div>
                <div className="card-info-group-item">
                  <span>{post?.comments?.toLocaleString()}</span>
                  <i className="fas fa-comment-alt" aria-hidden></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        count={10}
        color="primary"
        style={{ display: "flex", justifyContent: "center" }}
      />
    </div>
  );
};

export default PostGallery;

const items = [
  "NEW TODAY",
  "NEW THIS WEEK",
  "POPULAR (14 DAYS)",
  "POPULAR (ALL TIME)",
];

const posts = [
  {
    author: {
      avatar: "/img/boi.jpg",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Kirk Sawyer",
    image: "/img/cards/card4.png",
  },
  {
    author: {
      avatar: "/img/boi.jpg",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Cloud Girl",
    image: "/img/cards/card2.png",
  },
  {
    author: {
      avatar: "/img/boi.jpg",
      username: "sosig69",
    },
    likes: 69,
    views: 1000000,
    comments: 420,
    title: "Cyberpunk 2069 - Kerry Eurodyne",
    image: "/img/cards/card3.png",
  },
];
