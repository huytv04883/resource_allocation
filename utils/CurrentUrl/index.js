import { useRouter } from "next/router";
export const getCurrentUrl = () => {
  const router = useRouter();
  return router.pathname;
};
