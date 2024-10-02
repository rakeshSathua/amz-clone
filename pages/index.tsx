
import { BackgroundImg, HomeContainer, ProductRows } from "@/styles/homestyles";
import useProducts from "../components/hooks/useProducts";
import Link from "next/link";
import Product from "@/components/Product";


export default function Home() {

  const { loading, error, data } = useProducts();

  if (loading) return <p>Loading....</p>;
  if (error) return <p>ErR...</p>;

  return (
    <HomeContainer>
      <BackgroundImg
        src="https://m.media-amazon.com/images/I/61xnEcip5RL._SX3000_.jpg"
        alt="Amazon Background"
      />
      <ProductRows>
        {!!data &&
          data?.products.map((product: any) => (
            <Link href={`/product/${product.id}`} key={product.id}>
              <Product
                id={product.id}
                 title={product.name}
                price={product.price}
                rating={4}
                image={product?.images[0]?.url}
              />
            </Link>
          ))}
      </ProductRows>

    </HomeContainer>
  );
}
