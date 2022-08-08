import {createContext, useState } from 'react';

interface IModalContext {
    modal: boolean;
    open: () => void;
    close: () => void;
}

export const ModalContext = createContext<IModalContext>({
    modal: false,
    open: () => {}, // на вихоже пустая функция
    close: () => {}
});

//TODO Контекст - у него есть 2 основних поля это провайдер и consumer, с помощью провайдера мы говорим о том, какие данные мы хотим предоставить для внуттрених компонентов

export const ModalState = ({children}: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(false),
        open = () => setModal(true),
        close = () => setModal(false);
    return (
        <ModalContext.Provider value={{ modal, open, close }}>
            { children }
        </ModalContext.Provider>
    )
}
