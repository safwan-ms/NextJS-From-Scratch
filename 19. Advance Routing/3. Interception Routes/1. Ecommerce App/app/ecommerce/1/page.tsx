import Image from "next/image";

const ProductOne = () => {
  return (
    <div className="m-[4rem]">
      <h1 className="text-3xl mb-[1rem]">Macbook Pro</h1>

      <Image
        src="https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070"
        alt="Macbook Pic"
        width={640}
        height={640}
      />

      <p className="text-2xl mt-[1rem]">Price: $1000</p>
    </div>
  );
};
export default ProductOne;
