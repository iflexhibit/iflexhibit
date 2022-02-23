import axios from "axios";
import ProfileLayout from "components/layouts/ProfileLayout";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProfilePage(props) {
  const router = useRouter();
  useEffect(() => {
    router.push(
      { pathname: `/profile/${props.user.id}/${props.user.username}` },
      undefined,
      {
        shallow: true,
      }
    );
  }, [props.user.id, props.user.username]);
  return (
    <ProfileLayout
      user={props.user}
      posts={props.posts}
      results={props.results}
    />
  );
}

export async function getServerSideProps({ req, res, params, query }) {
  const searchParams = {
    sort: query.sort,
    page: query.page,
    type: query.type,
  };
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + "/api/users/user/" + params.id,
      { params: searchParams }
    );
    const data = response.data;
    if (data.user.username !== params.username)
      return {
        redirect: {
          destination: `/profile/${data.user.id}/${data.user.username}${
            query.tab ? `?tab=${query.tab}` : ""
          }`,
        },
      };
    return {
      props: { user: data.user, posts: data.posts, results: data.results },
    };
  } catch (error) {
    return {
      redirect: {
        destination: `/profile/not-found?q=${params.id}`,
      },
    };
  }
}
