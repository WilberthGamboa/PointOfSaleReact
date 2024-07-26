import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'
import { Dispatch, SetStateAction } from 'react'
interface Props {
    change: number,
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>
}

export const DialogChange = ({change,visible,setVisible}:Props) => {
    
    const footerContent = (
        <div>
            <Button label="Ok" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
        </div>
    );

    const headerElement = (
        <div className="inline-flex align-items-center justify-content-center gap-2">
            <span className="font-bold white-space-nowrap">Cambio</span>
        </div>
    );

    return (
        <Dialog
            header={headerElement}
            visible={visible}
            modal
            footer={footerContent}
            style={{ width: '50rem' }}
            onHide={() => setVisible(false)}
        >
            <h1>El cambio es de: {change}</h1>
        </Dialog>
    )
}
