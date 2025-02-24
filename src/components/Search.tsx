import React, { useRef } from "react";

interface ISearchProps {
  onSubmit: (keyword?: string) => void
}

export default function Search({ onSubmit }: ISearchProps) {

  const inputRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    onSubmit(inputRef.current?.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        className="bg-slate-700 rounded-l-lg py-2 px-4" />

      <button type="submit" className="rounded-r-lg py-2 px-4 bg-slate-700 border-l-2 border-slate-500">SEARCH</button>
    </form>
  )
}