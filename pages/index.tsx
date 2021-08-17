import { useRef, useState, useEffect } from 'react';

const convertTime12to24 = (hour: string, ampm: string): string => {
  let h: number | string = hour;
  if (h === '') return 'Enter a number';
  if (h === '12') {
    h = '00';
  }
  if (ampm === 'pm') {
    h = parseInt(h, 10) + 12;
  }
  return `${h}:00`;
};

export default function Home() {
  const [hour, setHour] = useState('');
  const [ampm, setAmPm] = useState('pm');
  const hourElement = useRef(null);

  useEffect(() => {
    // @ts-ignore
    hourElement.current.focus();
  }, []);

  return (
    <div className="p-32 bg-gray-900 h-screen w-screen flex flex-col items-center justify-center">
      <h1 className="text-9xl mb-32 text-indigo-600 font-bold">12 / 24</h1>
      <div className="flex mb-32">
        <input
          ref={hourElement}
          type="text"
          value={hour}
          onChange={(event) => {
            setHour(event.target.value);
          }}
          placeholder=""
          className="w-40 text-center mr-6 text-white bg-gray-700 border border-gray-700 text-9xl px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <select
          className="text-7xl text-white bg-gray-700 border border-gray-700 rounded-lg"
          onChange={(event) => {
            setAmPm(event.target.value);
          }}
        >
          <option selected={ampm === 'am' ? true : false}>am</option>
          <option selected={ampm === 'pm' ? true : false}>pm</option>
        </select>
      </div>
      <div className="mb-10">
        <h2 className="text-9xl text-indigo-600 font-bold">{convertTime12to24(hour, ampm)}</h2>
      </div>
    </div>
  );
}
