"use client";
import { Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const SearchInput = () => {
  const router = useRouter();
  const searchInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = event.target.value;
    inputValue.length ? router.replace(`?q=${inputValue}`) : router.push("/");
  };

  return (
    <Input
      onChange={searchInputChangeHandler}
      label="Search"
      isClearable
      radius="lg"
      classNames={{
        label: "text-black/50 dark:text-white/90",
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "shadow-xl",
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focused=true]:bg-default-200/50",
          "dark:group-data-[focused=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      placeholder="Type to search..."
      startContent={
        <AiOutlineSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
      }
    />
  );
};

export default SearchInput;
