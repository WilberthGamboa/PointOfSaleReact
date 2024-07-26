import { Button } from 'primereact/button'
import { Dialog } from 'primereact/dialog';
import { InputNumber } from 'primereact/inputnumber';
import { useState } from 'react';
import { FloatLabel } from 'primereact/floatlabel';

export const SelectMultipleProducts = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [value2, setValue2] = useState<number>();
    const [value3, setValue3] = useState<number>();
    return (

        <>
            <Button label="Agregar varios" severity="help" onClick={() => setVisible(true)} />
            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <div className='flex flex-column'>
                    <div className=''>
                    <label htmlFor="number-input">Barcode</label>
                            <InputNumber id="number-input" value={value2} onValueChange={(e) => setValue2(Number(e.value))} useGrouping={false} />
                            
                  

                    </div>
                    <div>
                        <label htmlFor="">Cantidad de producto</label>
                        <InputNumber value={value3} onValueChange={(e) => setValue3(Number(e.value))} useGrouping={false} />
                    </div>
                </div>
            </Dialog>
        </>

    )
}
