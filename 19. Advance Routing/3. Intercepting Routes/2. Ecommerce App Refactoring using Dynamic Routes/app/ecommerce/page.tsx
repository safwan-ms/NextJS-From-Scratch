import Image from "next/image";
import Link from "next/link";

const Ecommerce = () => {
  const products = [
    {
      id: 1,
      name: "Macbook Pro",
      price: "$1000",
      image:
        "https://images.unsplash.com/photo-1580522154071-c6ca47a859ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Football",
      price: "$200",
      image:
        "https://images.unsplash.com/photo-1566577739112-5180d4bf9390?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Sofa",
      price: "$500",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <section className="m-[4rem]">
        <div>
          <h1 className="text-3xl mb-3">Ecommerce</h1>
        </div>
        <section className="flex gap-3">
          {products.map((product) => (
            <div key={product.id}>
              <Link href={`/ecommerce/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                />
                <h2>{product.name}</h2>
                <p>{product.price}</p>
              </Link>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};
export default Ecommerce;
