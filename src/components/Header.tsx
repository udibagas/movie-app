import Search from "./Search";

interface IHeaderProps {
  keyword: string;
  setKeyword: (value: string) => void,
  onSubmit: () => void
}

export default function Header({ keyword, setKeyword, onSubmit }: IHeaderProps) {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">FinProH8</h1>
      <Search keyword={keyword} setKeyword={setKeyword} onSubmit={onSubmit} />
    </header>
  )
}