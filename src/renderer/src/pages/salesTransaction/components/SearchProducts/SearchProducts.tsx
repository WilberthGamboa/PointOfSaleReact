
import { Product } from "../../interfaces/salesTransaction.interface";
import { SearchBar } from "./components/SearchBar";
import useSearchProducts from "../../hooks/useSearchProducts";
import { DialogSearchBar } from "./components/DialogSearchBar";
import { Toast } from "primereact/toast";

interface Props {
    setproductToSell: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const SearchProducts = ({ setproductToSell }:Props) => {
    const { query, setQuery, options, toast, onEnter, searchProduct } = useSearchProducts({ setproductToSell });
  return (
    <>
    <SearchBar query={query} setQuery={setQuery} onEnter={onEnter} searchProduct={searchProduct} ></SearchBar>
    <DialogSearchBar options={options} setproductToSell={setproductToSell}  ></DialogSearchBar>
    <Toast ref={toast} />
    </>
  )
}
