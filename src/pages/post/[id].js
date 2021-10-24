import PostLayout from "components/layouts/PostLayout/PostLayout";
import axios from "axios";

export default function PostPage(props) {
  return <PostLayout post={props.post} />;
}

export async function getServerSideProps({ req, res, params }) {
  const response = await axios.get(
    process.env.API_URL + "/api/posts/" + params.id
  );
  const data = response.data;
  return { props: { post: data.post } };
}
