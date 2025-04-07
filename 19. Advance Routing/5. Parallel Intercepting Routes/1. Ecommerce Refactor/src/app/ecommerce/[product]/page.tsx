import { products } from "@/db/data";
import Image from "next/image";

const Product = async ({ params }: { params: { product: string } }) => {
  const { product } = await params;

  const findProduct = products.find((p) => p.id === +product);
  console.log(findProduct);
  return (
    <div className="m-[4rem]">
      <h1 className="text-3xl mb-[1rem]">{findProduct?.name}</h1>

      <Image
        src={`${findProduct?.image}`}
        alt={`${findProduct?.name}`}
        width={640}
        height={640}
      />

      <p className="text-2xl mt-[1rem]">Price: {findProduct?.price}</p>
    </div>
  );
};
export default Product;
