import axios from "axios";
import ProfileLayout from "components/layouts/ProfileLayout";

export default function ProfilePage(props) {
  return <ProfileLayout user={props.user} />;
}

export async function getServerSideProps({ req, res, params }) {
  const response = await axios.get(
    process.env.NEXT_PUBLIC_API_URL + "/api/users/user/" + params.id
  );
  const data = response.data;
  return { props: { user: data.user } };
}
