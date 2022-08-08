import React from 'react';


interface ModalProps {
    children: React.ReactNode;
    title: string;
    onClosing: () => void;
}

export function Modal({children, title, onClosing}: ModalProps) { // Объект props имеет зарезервированое поле children, и в него попадает как-раз всё что мы переадем как внутрений контент
    return ( // Всегда должен возвращать какой-то корневой элемент в jsx
        <>
           <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" onClick={onClosing}/> 
           <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-center mb-2">{title}</h1>

                {children}
           </div>
        </>
    )
}

