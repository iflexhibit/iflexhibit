export default function Redirect() {
  return <></>;
}

export async function getServerSideProps({ req, res, params }) {
  return {
    redirect: {
      destination: `/post/${params.id}/title`,
    },
  };
}
