import HomeLayout from "components/layouts/HomeLayout";
import Cookies from "cookies";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "redux/actions/authAction";

export default function HomePage(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setToken(props.token));
  }, []);
  return <HomeLayout />;
}

export async function getServerSideProps({ req, res }) {
  const cookies = new Cookies(req, res);
  const token = cookies.get("token") || null;
  return { props: { token } };
}
