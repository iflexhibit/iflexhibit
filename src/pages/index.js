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
  }, []);
  return <HomeLayout posts={props.posts} />;
}

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res);
  const token = cookies.get("token") || null;
  const response = await axios.get(process.env.API_URL + "/api/posts");
  const data = response.data;
  return { props: { token, posts: data.posts } };
}
