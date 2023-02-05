import Avatar from '@components/Avatar';
import Layout from '@components/Layout';
import Sponsored from '@components/Sponsored';
import { GetServerSideProps } from 'next';

const Notifications = ({ items }) => {
  return (
    <Layout hideSidebar title="Notifications">
      <div className="flex">
        <div className="relative w-full pr-40">
          <h1 className="mb-8 text-2xl font-bold leading-5 text-gray-dark2">
            Notifications
          </h1>

          <div className="flex flex-col">
            {items.map((item) => (
              <div
                key={item.id}
                className="mb-7 flex border-b border-b-gray-light2 last:border-none"
              >
                <div className="w-12">
                  <Avatar user={item.user} className="!h-12 !w-12" />
                </div>
                <div className="ml-5 flex flex-col">
                  <span className="mb-2 text-base font-medium leading-3 text-gray-dark4">
                    {item.title}{' '}
                    <span className="ml-2 text-gray-light6">{item.date}</span>
                  </span>
                  <span className="mb-4 text-base font-normal leading-3 text-gray-base">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Sponsored />
      </div>
    </Layout>
  );
};

export default Notifications;

export const getServerSideProps: GetServerSideProps = async () => {
  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${context.params.id}`
  //   );
  //   const item = await res.json();
  const items = [
    {
      id: 1,
      type: 'review',
      user: {
        id: 1,
        name: 'John Doe',
        image: '/images/user.jpg',
      },
      title: 'John clapped your Review!',
      text: `Looking for low prices? We've got an entire page dedicated to finding you fantastic deals in your favorite places.`,
      date: '9 m',
    },
    {
      id: 2,
      type: 'review',
      user: {
        id: 1,
        name: 'John Doe',
        image: '',
      },
      title: 'John clapped your Review!',
      text: `Looking for low prices? We've got an entire page dedicated to finding you fantastic deals in your favorite places.`,
      date: '32 m',
    },
  ];

  return {
    props: {
      items,
    },
  };
};
