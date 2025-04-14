import { useState } from "react";

export default function SearchBar({ handelSubmit }) {
  const [search, setSearch] = useState("");
  return (
    <div className="flex w-96 h-12  justify-between rounded-full bg-0-dark1-0 px-4">
      <form
        className="flex w-full"
        onSubmit={(e) => {
          handelSubmit(e, search);
          setSearch("");
        }}
      >
        <input
          value={search}
          type="text"
          placeholder="Personagem, episódio, localização..."
          className="p-4 bg-transparent outline-none w-full text-white"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </form>
      <button>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.7075 27.2925L22.4488 21.035C24.2628 18.8571 25.1674 16.0637 24.9743 13.2359C24.7812 10.4081 23.5054 7.76358 21.4122 5.85248C19.319 3.94137 16.5696 2.91083 13.7359 2.97523C10.9022 3.03963 8.20246 4.19401 6.19824 6.19824C4.19401 8.20246 3.03963 10.9022 2.97523 13.7359C2.91083 16.5696 3.94137 19.319 5.85248 21.4122C7.76358 23.5054 10.4081 24.7812 13.2359 24.9743C16.0637 25.1674 18.8571 24.2628 21.035 22.4488L27.2925 28.7075C27.3854 28.8004 27.4957 28.8741 27.6171 28.9244C27.7385 28.9747 27.8686 29.0006 28 29.0006C28.1314 29.0006 28.2615 28.9747 28.3829 28.9244C28.5043 28.8741 28.6146 28.8004 28.7075 28.7075C28.8004 28.6146 28.8741 28.5043 28.9244 28.3829C28.9747 28.2615 29.0006 28.1314 29.0006 28C29.0006 27.8686 28.9747 27.7385 28.9244 27.6171C28.8741 27.4957 28.8004 27.3854 28.7075 27.2925ZM5.00001 14C5.00001 12.22 5.52785 10.4799 6.51678 8.99988C7.50572 7.51984 8.91132 6.36628 10.5559 5.68509C12.2004 5.00391 14.01 4.82568 15.7558 5.17294C17.5017 5.52021 19.1053 6.37738 20.364 7.63605C21.6226 8.89472 22.4798 10.4984 22.8271 12.2442C23.1743 13.99 22.9961 15.7996 22.3149 17.4442C21.6337 19.0887 20.4802 20.4943 19.0001 21.4832C17.5201 22.4722 15.78 23 14 23C11.6139 22.9974 9.32623 22.0483 7.63897 20.361C5.95172 18.6738 5.00266 16.3861 5.00001 14Z"
            fill="#E4F4F4"
          />
        </svg>
      </button>
    </div>
  );
}
