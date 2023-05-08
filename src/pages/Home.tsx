import React from 'react';
import { ProductsShowCase } from '../components/ProductsShowCase';
import { useGetAvailableProductsQuery } from '../services';
import { Container, HomeSlider, Loader } from '../components';

export function Home() {
  const { isLoading, error, data } = useGetAvailableProductsQuery();
  if (isLoading) return <Loader />;

  if (error instanceof Error) return <div>Error: {error.message}</div>;

  const products = data?.data?.slice(0, 10);
  const images = products?.slice(0, 3).map((product) => product.images);
  return (
    <main>
      <Container>
        <HomeSlider images={images ?? []} />
        <div className="py-20">
          <div className="px-6 mx-auto xl:container md:px-12">
            <div className="mb-16 md:w-2/3 lg:w-1/2">
              <h2 className="mb-4 text-2xl font-bold !text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 md:text-4xl">
                New Arrivals
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Find the latest products from our sellers and get the best deals.
              </p>
            </div>
            <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {products?.map((product) => (
                <ProductsShowCase key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full py-5 map">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsa molestiae modi quam
          eveniet id magnam quos, tempore assumenda possimus sint consequuntur sequi, facilis eius
          sed ipsam ad recusandae deleniti!
          <iframe
            title="Cypher Shop Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7974.950978209571!2d30.14562676989106!3d-1.9635991121345133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2srw!4v1683046416243!5m2!1sen!2srw"
            className="w-full rounded-md shadow h-96"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </main>
  );
}
