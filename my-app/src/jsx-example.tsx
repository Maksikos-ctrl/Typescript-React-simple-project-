import {createElement as el, useState} from 'react';



function App() {

  const [count, setCount] = useState(0); // мы говорим что 0 жлемент этого массива мы заносим в константу count, 1 єлемент по индексу 1 мі заносим в вторую перемнную, и это функция которая позволяет изменять состояние count
  // return (
    
  // );

  return el('div', {className: 'container'}, [el('h1', {className: 'font-bold'}, `TEST tsx${count}`), el('button', {className: '', key: 2, onClick: () => setCount(count + 1)}, 'Click me')])
}

