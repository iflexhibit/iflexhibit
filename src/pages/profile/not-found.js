import UserNotFoundLayout from "components/layouts/UserNotFoundLayout";
import { useRouter } from "next/router";

export default function UserNotFound() {
  const router = useRouter();
  return <UserNotFoundLayout search={router.query.q} />;
}
