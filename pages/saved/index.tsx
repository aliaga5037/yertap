import Card from '@components/Card';
import CategoryTabs from '@components/CategoryTabs';
import Layout from '@components/Layout';
import { categories, sampleRestaurantData } from '@utils/sample-data';
import { GetServerSideProps } from 'next';
import type { Restaurant } from 'types';

const Saved = ({ items }: { items: Restaurant[] }) => {
  const handleCategoryChange = (index) => {
    const category = categories[index];
    // const filteredItems = sampleRestaurantData.filter(
    //   (item) => item.category === category.title
    // );
  };
  return (
    <Layout title="Saved">
      <div className="relative flex flex-col pl-11 w-full">
        <h1 className="mb-6 text-2xl font-bold leading-5 text-gray-dark2">
          Save List
        </h1>

        <div className='mb-8 max-w-4xl'>
          <CategoryTabs
            categories={categories}
            onChange={() => handleCategoryChange}
          />
        </div>

        <div className="flex flex-wrap gap-5">
          {items.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Saved;

export const getServerSideProps: GetServerSideProps = async () => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  //   );
  //   const item = await res.json();
  const items = sampleRestaurantData.filter((data) => data.marked);

  return {
    props: {
      items,
    },
  };
};
