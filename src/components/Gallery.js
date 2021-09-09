import Image from "next/image";
import PropTypes from "prop-types";

const Gallery = ({ posts, grid }) => {
  return (
    posts.length > 0 && (
      <div className={`gallery-${grid}`}>
        {posts?.map((post, index) => (
          <Card post={post} key={index} />
        ))}
      </div>
    )
  );
};

const Card = ({ post }) => {
  return (
    <div className="card">
      <Image
        src={post?.image}
        layout="fill"
        objectFit="cover"
        alt={post?.title}
        placeholder="blur"
        blurDataURL="/img/blur.jpg"
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
  );
};

Gallery.propTypes = {
  posts: PropTypes.array.isRequired,
  grid: PropTypes.number,
};

Gallery.defaultProps = {
  posts: [],
  grid: 3,
};

export default Gallery;
