import PostLayout from "components/layouts/PostLayout/PostLayout";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setPost } from "redux/actions/postAction";
import { useEffect } from "react";

export default function PostPage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPost(props.post));
  });
  return <PostLayout post={props.post} />;
}

export async function getServerSideProps({ req, res, params }) {
  const response = await axios.get(
    process.env.API_URL + "/api/posts/" + params.id
  );
  const data = response.data;
  return { props: { post: data.post } };
}
