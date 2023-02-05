import Image from 'next/image';
import type { Review } from 'types';
import HoverRating from '@components/HoverRating';
import TextRating from '@components/TextRating';
import Avatar from '@components/Avatar';

const Reviews = ({
  review,
  place,
}: {
  review: Review;
  place: { image: string; title: string; type: string };
}) => {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-normal leading-5 text-black">
        <span className="font-bold">{review.count}</span> 👤 rated this place:
      </h1>

      <div className="mb-4 flex w-[590px] items-center overflow-hidden rounded-lg border border-gray-light3 pr-4">
        <Image
          src={place.image}
          width={64}
          height={64}
          alt={place.title}
          className="mr-3 h-auto w-auto"
        />
        <div className="ml-4 flex flex-col">
          <span className="text-sm font-semibold leading-2 text-gray-dark3">
            {place.title}
          </span>
          <span className="text-sm font-normal leading-2 text-gray-dark3">
            {place.type}
          </span>
        </div>

        <div className="ml-auto flex">
          <i className="icon icon-star mr-2 flex" />
          <span className="mr-2 text-sm font-medium leading-1 text-gray-dark3">
            {review.average}
          </span>
          <span className="text-sm font-normal leading-1 text-gray-dark3">
            ({review.count.toLocaleString()})
          </span>
        </div>
      </div>

      <div className="mb-14 flex flex-col pl-8">
        {Object.entries(review.stars)
          .reverse()
          .map(([key, value]) => (
            <div key={key} className="mb-3 flex items-center">
              <i className="icon icon-star mr-3  flex" />
              <span className="mr-8">{key}</span>
              <div className="mr-10 h-1 w-[364px] rounded-[10px] bg-gray-light3">
                <div
                  className={`h-1 rounded-[10px] bg-gray-dark2`}
                  style={{ width: `${(value * 100) / review.count}%` }}
                ></div>
              </div>
              <span className="flex items-center gap-3">
                <i className="icon icon-user flex" />
                {value}
              </span>
            </div>
          ))}
      </div>

      <div className="mb-12 h-0.5 w-full rounded-[10px] bg-gray-light3"></div>

      <h1 className="mb-8 text-2xl font-normal leading-5 text-black">
        Leave a review below if you wish. 😉
      </h1>

      <div className="mb-12 flex w-[590px] flex-col rounded-xl bg-gray-light0 p-6">
        <div className="mb-6 flex">
          <span className="text-dark2 mr-1 text-base font-medium leading-3">
            You can give
          </span>
          <HoverRating initialRating={2} />
          <span className="text-dark2 ml-1 text-base font-medium leading-3">
            stars
          </span>
        </div>

        <div className="mb-6">
          <textarea
            name=""
            id=""
            className="h-[216px] w-full resize-none rounded-xl border border-gray-light4 px-5 py-4 text-base font-normal leading-3 text-gray-dark2"
          ></textarea>
        </div>

        <div className="flex items-center justify-end">
          <span className="text-base font-medium leading-3 text-gray-dark2">
            20 / 200
          </span>
          <button className="ml-6 rounded-lg bg-gray-light1 px-[14px] py-[13px] text-base font-medium leading-[18px] text-gray-light4">
            Post
          </button>
        </div>
      </div>

      {review.items.map((item) => (
        <div
          key={item.id}
          className="mb-4 flex w-[590px] flex-col rounded-xl bg-gray-light0 p-6"
        >
          <div className="mb-6 flex">
            <Avatar user={item.user} className="mr-4 h-12 w-12" />
            <div className="flex flex-col justify-center">
              <span className="text-base font-semibold leading-2 text-gray-dark3">
                {item.user.name}
              </span>
              <span className="text-sm font-normal leading-2 text-gray-base">
                {item.date}
              </span>
            </div>
          </div>
          <div className="mb-6">
            <span className="text-base font-normal leading-3 text-gray-dark2">
              {item.text}
            </span>
          </div>
          <div className="mb-6 flex items-center text-base font-medium leading-3 text-gray-dark2">
            <span className="text-dark2 mr-1 text-base font-medium leading-3">
              I gave
            </span>
            <TextRating rating={item.rating} />
            <span className="text-dark2 ml-1 text-base font-medium leading-3">
              stars
            </span>
          </div>
          <div className="flex justify-around">
            <div className="flex">
              <i className="icon icon-clap mr-3 flex cursor-pointer items-center" />
              24
            </div>
            <div className="flex">
              <i className="icon icon-reply mr-3 flex  cursor-pointer items-center" />
              10
            </div>
            <div>
              <i className="icon icon-share flex cursor-pointer items-center" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
