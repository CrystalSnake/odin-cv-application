import React from 'react';

export default function Header(props) {
  return (
    <div className="tw-max-h-20 tw-bg-gray-300 tw-drop-shadow-md">
      <div className="tw-m-auto tw-max-w-screen-2xl tw-w-full tw-flex items-center tw-justify-start ">
        <h1 className="tw-text-blue-500 tw-py-4 tw-px-10">{props.title}</h1>
      </div>
    </div>
  );
}
