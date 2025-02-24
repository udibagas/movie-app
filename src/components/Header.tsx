import Search from "./Search";

interface IHeaderProps {
  onSubmit: (keyword?: string) => void
}

export default function Header({ onSubmit }: IHeaderProps) {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-2xl font-bold">FinProH8</h1>
      <Search onSubmit={onSubmit} />
    </header>
  )
}