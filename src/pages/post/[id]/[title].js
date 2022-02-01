import PostLayout from "components/layouts/PostLayout/PostLayout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPost } from "redux/actions/postAction";
import { useEffect } from "react";
import { viewPost } from "redux/actions/userAction";

export default function PostPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPost(props.post));
    dispatch(viewPost(props.post.id));
  }, [props.post]);
  return <PostLayout post={props.post} />;
}

export async function getServerSideProps({ req, res, params }) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/posts/post/" + params.id
    );
    const data = response.data;
    const formatTitle = data.post.title.split(" ").join("-");
    if (formatTitle !== params.title)
      return {
        redirect: {
          destination: `/post/${data.post.id}/${formatTitle}`,
        },
      };
    return { props: { post: data.post } };
  } catch (error) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }
}
