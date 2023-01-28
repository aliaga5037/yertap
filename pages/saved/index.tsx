import Card from '@components/Card';
import Layout from '@components/Layout';
import { sampleRestaurantData } from '@utils/sample-data';
import { GetServerSideProps } from 'next';
import type { Restaurant } from 'types';

const Saved = ({ items }: { items: Restaurant[] }) => {
  return (
    <Layout title="Saved">
      <div className="relative pl-11">
        <h1 className="mb-6 text-2xl font-bold leading-5 text-gray-dark2">
          Save List
        </h1>

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
