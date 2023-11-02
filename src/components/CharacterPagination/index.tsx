"use client";
import { Pagination } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

type TypePagination = {
  total: number;
  initialPage: number;
};

const CharacterPagination = ({ total, initialPage }: TypePagination) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  const paginationChangeHandler = (page: number) => {
    router.push(`?page=${page}${q ? `&q=${q}` : null}`);
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
