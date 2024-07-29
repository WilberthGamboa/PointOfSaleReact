
import useSearchProducts from "@renderer/pages/salesTransaction/components/SearchProducts/hooks/useSearchProducts";
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Toast } from "primereact/toast";



export const SearchBarProducts = () => {
  const { query, setQuery, toast, onEnter, searchProduct } = useSearchProducts();
  return (
    <>
      <div className='flex flex-row w-full'>
        <InputText
          className='mr-2 w-full'
          placeholder='Buscar producto'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => onEnter(e)}
        />
        <Button className='' style={{ minWidth: "100px" }} label="Buscar" onClick={searchProduct} />
      </div>
      <Toast ref={toast} />
    </>
  )
}
