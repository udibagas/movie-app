import React, { useRef } from "react";
import useMovie from "../hooks/useMovie";

export default function Search() {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setKeyword } = useMovie();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputRef.current) return;
    setKeyword(inputRef.current?.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="bg-slate-700 rounded-l-lg py-2 px-4"
      />

      <button
        type="submit"
        className="rounded-r-lg py-2 px-4 bg-slate-700 border-l border-slate-500 cursor-pointer"
      >
        SEARCH
      </button>
    </form>
  );
}
