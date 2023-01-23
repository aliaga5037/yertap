import Layout from '@components/Layout';
import Card from '@components/Card';
import Filter from '@components/Filter';
import LoadIcon from 'Icons/load.svg';
import { sampleRestaurantData } from '@utils/sample-data';

const IndexPage = () => (
  <Layout title="Home | Yertap">
    <div className="flex w-full flex-col pl-11">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold leading-5 tracking-tighter">
          Restaurants
        </h1>
        <div>
          <Filter />
        </div>
      </div>
      <hr className="my-5 h-0.5 rounded-lg bg-gray-light2" />
      <div className="scrollbar-hide mb-8 flex max-w-4xl overflow-x-scroll scroll-smooth">
        {[
          { id: 1, title: 'all' },
          { id: 2, title: 'breakfast' },
          { id: 3, title: 'pizza' },
          { id: 4, title: 'seafood' },
          { id: 5, title: 'asian food' },
          { id: 6, title: 'burger' },
          { id: 7, title: 'steak' },
          { id: 8, title: 'breakfast' },
          { id: 9, title: 'seafood' },
          { id: 10, title: 'sushi' },
          { id: 11, title: 'burger' },
          { id: 12, title: 'breakfast' },
          { id: 13, title: 'seafood' },
        ].map((sort) => (
          <div
            key={sort.id}
            className={`cursor-pointer whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium capitalize leading-1 tracking-[0.4px] ${
              sort.id === 1
                ? 'bg-gray-dark2 text-gray-light0'
                : 'ml-2 bg-gray-light0 text-gray-base hover:bg-gray-light1 hover:text-gray-dark1'
            }`}
          >
            {sort.title}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between">
        {sampleRestaurantData.map((res) => (
          <Card key={res.id} {...res} />
        ))}
      </div>
      <div className="flex justify-between">
        <span className="text-base font-bold leading-2 text-gray-dark2">
          There are (21) Restaurants now.
        </span>
        <button className="flex items-center rounded-lg bg-gray-light1 px-[14px] py-[11px] text-base leading-1 text-gray-dark3">
          <LoadIcon className="mr-2" /> Show More Restaurants
        </button>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
