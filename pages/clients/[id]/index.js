import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/clients/max/projecta");
  };
  return (
    <div>
      Client projects
      <button onClick={handleClick}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
