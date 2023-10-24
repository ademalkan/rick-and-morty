"use client";
import { Pagination } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

type TypePagination = {
  total: number;
  initialPage: number;
};

const CharacterPagination = ({ total, initialPage }: TypePagination) => {
  const router = useRouter();
  const paginationChangeHandler = (page: number) => {
    router.push(`?page=${page}`);
  };
  return (
    <div className="flex justify-center items-center w-full mt-5">
      <Pagination
        onChange={paginationChangeHandler}
        total={total}
        initialPage={initialPage}
        color={"warning"}
      />
    </div>
  );
};

export default CharacterPagination;
