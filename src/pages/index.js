import HomeLayout from "components/layouts/HomeLayout";
import Cookies from "cookies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "redux/actions/authAction";
import axios from "axios";

export default function HomePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setToken(props.token));
  });
  return <HomeLayout posts={props.posts} results={props.results} />;
}

export async function getServerSideProps({ req, res, query }) {
  const params = {
    title: query.title,
    tags: query.tags,
    sort: query.sort,
    page: query.page,
  };
  const cookies = new Cookies(req, res);
  const token = cookies.get("token") || null;
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/api/posts",
    { params }
  );
  const data = response.data;
  return { props: { token, posts: data.posts, results: data.results } };
}
