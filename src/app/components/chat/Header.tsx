import React from 'react';

export default function Header() {
  // Will contain the chat box Header
  return (
    <section className="w-full h-full flex justify-between align-middle items-end mx-auto my-auto">
      <svg
        className=" rounded-lg cursor-pointer p-1  hover:bg-gray-300"
        xmlns="http://www.w3.org/2000/svg"
        width="40px"
        height="40px"
        viewBox="0 0 21 21">
        <g
          fill="none"
          fillRule="evenodd"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(3 3)">
          <path d="m.5 12.5v-10c0-1.1045695.8954305-2 2-2h10c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2h-10c-1.1045695 0-2-.8954305-2-2z" />

          <path
            d="m12.5 12.5v-10c0-1.1045695-.8954305-2-2-2h2c1 0 2 .8954305 2 2v10c0 1.1045695-1 2-2 2h-2c1.1045695 0 2-.8954305 2-2z"
            fill="#000000"
          />

          <path d="m7.5 10.5 3-3-3-3" />

          <path d="m10.5 7.5h-8" />
        </g>
      </svg>
      <h1 className="text-xl text-center items-center mb-2 font-bold">
        {' '}
        Stream Chat{' '}
      </h1>
      <svg
        className=" rounded-lg cursor-pointer p-1 hover:bg-gray-300 mb-1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill="#000000"
        width="35px"
        height="35px"
        viewBox="0 0 128 128"
        id="Layer_1"
        version="1.1"
        xmlSpace="preserve">
        <g>
          <path d="M64,42c-13.2,0-24,10.8-24,24s10.8,24,24,24s24-10.8,24-24S77.2,42,64,42z M64,82c-8.8,0-16-7.2-16-16s7.2-16,16-16   s16,7.2,16,16S72.8,82,64,82z" />

          <path d="M64,100.8c-14.9,0-29.2,6.2-39.4,17.1l-2.7,2.9l5.8,5.5l2.7-2.9c8.8-9.4,20.7-14.6,33.6-14.6s24.8,5.2,33.6,14.6l2.7,2.9   l5.8-5.5l-2.7-2.9C93.2,107.1,78.9,100.8,64,100.8z" />

          <path d="M97,47.9v8c9.4,0,18.1,3.8,24.6,10.7l5.8-5.5C119.6,52.7,108.5,47.9,97,47.9z" />

          <path d="M116.1,20c0-10.5-8.6-19.1-19.1-19.1S77.9,9.5,77.9,20S86.5,39.1,97,39.1S116.1,30.5,116.1,20z M85.9,20   c0-6.1,5-11.1,11.1-11.1s11.1,5,11.1,11.1s-5,11.1-11.1,11.1S85.9,26.1,85.9,20z" />

          <path d="M31,47.9c-11.5,0-22.6,4.8-30.4,13.2l5.8,5.5c6.4-6.9,15.2-10.7,24.6-10.7V47.9z" />

          <path d="M50.1,20C50.1,9.5,41.5,0.9,31,0.9S11.9,9.5,11.9,20S20.5,39.1,31,39.1S50.1,30.5,50.1,20z M31,31.1   c-6.1,0-11.1-5-11.1-11.1S24.9,8.9,31,8.9s11.1,5,11.1,11.1S37.1,31.1,31,31.1z" />
        </g>
      </svg>
    </section>
  );
}
