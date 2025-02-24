import React from "react";

interface ISearchProps {
  keyword: string;
  setKeyword: (value: string) => void,
  onSubmit: () => void
}

export default function Search({ keyword, setKeyword, onSubmit }: ISearchProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        type="text"
        placeholder="Search"
        className="bg-slate-700 rounded-l-lg py-2 px-4" />

      <button type="submit" className="rounded-r-lg py-2 px-4 bg-slate-700 border-l-2 border-slate-500">SEARCH</button>
    </form>
  )
}