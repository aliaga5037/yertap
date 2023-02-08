import Layout from '@components/Layout';
import Card from '@components/Card';
import Filter from '@components/Filter';
import { sampleRestaurantData, tags } from '@utils/sample-data';

const IndexPage = () => {
  return (
    <Layout title="Home | Yertap">
      <div className="flex w-full flex-col pl-11 ">
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
          {tags.map((sort) => (
            <div
              key={sort.id}
              className={`flex cursor-pointer whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium capitalize leading-1 tracking-[0.4px] ${
                sort.id === 1
                  ? 'bg-gray-dark2 text-gray-light0'
                  : 'ml-2 bg-gray-light0 text-gray-base hover:bg-gray-light1 hover:text-gray-dark1'
              }`}
            >
              <i
                className={`icon icon-${sort.icon} mr-1.5 flex text-inherit`}
              />
              {sort.title}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-5">
          {sampleRestaurantData.map((res) => (
            <Card key={res.id} {...res} />
          ))}
        </div>
        <div className="flex justify-between">
          <span className="text-base font-bold leading-2 text-gray-dark2">
            There are (21) Restaurants now.
          </span>
          <button className="flex items-center rounded-lg bg-gray-light1 px-[14px] py-[11px] text-base leading-1 text-gray-dark3">
            <i className="icon icon-load mr-2 flex " /> Show More Restaurants
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
