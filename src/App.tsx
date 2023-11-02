import './app.module.css'
import {RadixTooltip} from "./radix/radix-tooltip.tsx";
import {PlusIcon} from "@radix-ui/react-icons";
import {ReactTooltip} from "./react-tooltip/react-tooltip.tsx";
// import s from './app.module.css'

function App() {

  // const complete = str =>{
  //
  //
  //
  // }
  //   let strReverse = str.split('').reverse().join('');
  //   let j = 1;
  //   if(str.length === 1) {
  //     return str + str
  //   }
  //   for (let i = 1; i < str.length; i++) {
  //     if (strReverse[0] === strReverse[i]) {
  //       j += 1;
  //
  //     } else {
  //       break
  //     }
  //
  //   }
  //   let newString = strReverse.substring(j, )
  //   return str + newString;
  // }




  // В этой задаче вам нужно написать функцию, которая принимает на вход строку и возвращает новую строку следующим образом:
  //
  //   К исходной строке добавляются одна или более букв справа, чтобы получившаяся строка читалась одинаково с обоих концов.
  //
  //   Буквы можно добавлять только справа.
  //
  //   Обязательно нужно добавить хотя бы одну букву.
  //
  //   Если есть несколько вариантов, возвращать самую короткую строку.
  //
  //   Буквы и регистр учитываются.
  //
  //   То есть функция должна принимать строку в качестве входного параметра и возвращать палиндромную строку, добавив одну или более букв справа.
  //
  //   Например:
  //
  // для входа "a" функция должна вернуть "aa"
  // для входа "GG" функция должна вернуть "GGG"
  // и т.д.

  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <div>
        Radix
        <RadixTooltip trigger={
          <button className="IconButton">
            <PlusIcon/>
          </button>
        }>
          Добавляет собственный JavaScript-код
          <a>Подробнее</a>
        </RadixTooltip>
      </div>

      <div>
        React-Tooltip
        <button id={'tooltip_react_tooltip'}>✏️</button>
        <ReactTooltip anchorSelect={'#tooltip_react_tooltip'}>
          Добавляет собственный JavaScript-код
          <a>Подробнее</a>
        </ReactTooltip>
      </div>
    </div>
  )
}

export default App
