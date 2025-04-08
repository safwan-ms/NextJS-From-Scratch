import { add, sub } from "@/utils/index";

const ServerComponent = () => {
  const result = add(1, 2);
  const result2 = sub(1, 2);
  console.log(result);
  console.log(result2);

  return <div>Server Component</div>;
};
export default ServerComponent;
