
import useSearchProducts from "@renderer/pages/salesTransaction/components/SearchProducts/hooks/useSearchProducts";
import { Button } from "primereact/button"
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext"
import { Toast } from "primereact/toast";




export const SearchBarProducts = () => {
  
  const { query, setQuery, toast, onEnter, onClick,quantity,setQuantity } = useSearchProducts();
  
  return (
    <>
      <div className='flex flex-row w-full'>
      <InputNumber inputId="minmax" value={quantity} onValueChange={(e) => {
        setQuantity(Number(e.value))

      }} min={1} max={100} />
        <InputText
          className='mr-2 w-full'
          placeholder='Buscar producto'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => onEnter(e)}
        />
        <Button className='' style={{ minWidth: "100px" }} label="Buscar" onClick={onClick} />
      </div>
      <Toast ref={toast} />
    </>
  )
}
