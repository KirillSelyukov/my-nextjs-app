import { useRouter } from "next/router";

const PorfolioProjectPage = () => {
  const router = useRouter();

  console.log("{router.query}:", router.query);

  return <div>Portfolio project page {router.pathname}</div>;
};

export default PorfolioProjectPage;
