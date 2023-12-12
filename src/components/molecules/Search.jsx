import { ReactComponent as SearchIcon } from "../../assets/search.svg";


export default function Search() {
  return (
    <div className="flex items-center w-1/3">
      <input
        className="p-1.5 border-1 ring-1 ring-inset w-full"
        type="text"
        placeholder="Znajdź produkt"
      />
      <button className="text-white bg-orange-600 hover:bg-orange-500 flex gap-2 items-center p-1.5">
        <SearchIcon />
        <div className="hidden md:block mr-1">SZUKAJ</div>
      </button>
    </div>
  );
}
