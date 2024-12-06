import * as React from "react";

function NotificationCard({ image, title, description, timestamp }) {
  return (
    <div className="py-4 pr-20 pl-2.5 mt-5 bg-rose-100 rounded-3xl max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image}
            alt=""
            className="object-contain grow shrink-0 max-w-full rounded-3xl aspect-[0.96] w-[100px] max-md:mt-9"
          />
        </div>
        <div className="flex flex-col ml-5 w-full max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-between grow items-start self-stretch my-auto text-base max-md:mt-10">
            <div className="text-lg font-semibold text-center text-black">
              {title}
            </div>
            {description && (
              <div className="self-stretch mt-2 text-zinc-800">
                {description}
              </div>
            )}
            <div className="mt-2 text-stone-500">{timestamp}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotificationCard;
