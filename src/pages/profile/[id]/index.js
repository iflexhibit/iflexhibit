export default function Redirect() {
  return <></>;
}

export async function getServerSideProps({ req, res, params, query }) {
  return {
    redirect: {
      destination: `/profile/${params.id}/user${
        query.type ? `?type=username` : ""
      }`,
    },
  };
}
