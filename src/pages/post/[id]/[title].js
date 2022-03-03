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

export async function getServerSideProps({ req, res, params, query }) {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/posts/post/" + params.id
    );
    const data = response.data;
    const splitTitle = data.post.title.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
    const formatTitle = splitTitle.join("-");
    const altTitle = `post${data.post.id}-by-${data.post.author.username}`;
    if (!/^[a-z0-9]+$/i.test(formatTitle.split("-").join("")))
      return {
        redirect: {
          destination: `/post/${data.post.id}/${altTitle}${
            query.tab ? `?tab=${query.tab}` : ""
          }`,
        },
      };
    if (formatTitle !== params.title && altTitle !== params.title)
      return {
        redirect: {
          destination: `/post/${data.post.id}/${formatTitle}${
            query.tab ? `?tab=${query.tab}` : ""
          }`,
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
