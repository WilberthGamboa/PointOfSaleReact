
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { Dispatch, SetStateAction, KeyboardEvent} from "react";
interface Props {
  query:string,
  setQuery:Dispatch<SetStateAction<string>>,
  onEnter(e: KeyboardEvent<HTMLInputElement>): void,
  searchProduct: () => Promise<void>
}

export const SearchBar = ({query,setQuery,onEnter,searchProduct}:Props) => {
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

    </>
  )
}
