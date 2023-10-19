import * as Tooltip from '@radix-ui/react-tooltip';
import './radix-tooltip.css';
import React, {FC} from "react";



/**
 *        Provider
 * @param {number} delayDuration - Продолжительность времени от момента попадания мыши в триггер всплывающей подсказки до момента ее открытия..
 * @param {boolean} disableHoverableContent - Препятствует тому, чтобы Tooltip.Content оставался открытым при наведении курсора.
 *
 *        Root
 * @param {boolean} defaultOpen - Флаг, указывающий, включена ли подсказка при входе на страницу.
 * @param {boolean} open - Параметр для управления состоянием компонета.
 * @param {function} onOpenChange - Обработчик события, вызываемый при изменении открытого состояния всплывающей подсказки.
 * @param {boolean} disableHoverableContent - Препятствует тому, чтобы Tooltip.Content оставался открытым при наведении курсора.
 *
 *        Trigger
 * @param {boolean} asChild - Дочерние компоненты будут восприниматьсь как ссылка например (по дефолту button)
 *
 *        Portal
 * @param {boolean} forceMount - Используется для принудительного монтажа, когда требуется больший контроль
 * @param {HTMLElement} container - Элемент-контейнер, в который будет переноситься содержимое. (дефолт document.body)
 *
 *        Content
 * @param {function} onEscapeKeyDown - Обработчик события, вызываемый при нажатии клавиши escape. Это можно предотвратить, вызвав event.preventDefault. (event: KeyboardEvent) => void
 * @param {enum} side - Предпочтительная сторона триггера для отрисовки в открытом состоянии. При возникновении столкновений и включении функции avoidCollisions она будет изменена на противоположную.
 * @param {number} sideOffset - Расстояние на котором будет расположен тултип в пикселях  от триггера.
 * @param {enum} align - Предпочтительное выравнивание относительно триггера. Может изменяться при столкновениях.
 * @param {number} alignOffset - Расстояние на котором будет расположен тултип в пикселях  от триггера.
 * @param {Boundary} collisionBoundary - Элемент, используемый в качестве границы столкновения. По умолчанию это область просмотра, однако можно указать дополнительный элемент (элементы), который будет включен в эту проверку.
 * @param {number | Padding} collisionPadding - Расстояние в пикселях от краев границы, на котором должно происходить обнаружение столкновений. Принимается число (одинаковое для всех сторон) или частичный объект padding, например: { top: 20, left: 20 }.
 * @param {number} arrowPadding - Подложка между стрелкой и краями содержимого. Если содержимое имеет border-radius, это значение не позволит ему выходить за углы.
 *
 *
 *
 */


type RadixTooltipProps = {
 trigger: React.ReactNode
 children: React.ReactNode
}

export const RadixTooltip:FC<RadixTooltipProps> = ({trigger, children}) => {
  return (
    <Tooltip.Provider delayDuration={100} disableHoverableContent={true}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {trigger}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5} align={"center"} side={'right'} style={{display: "flex", flexDirection: "column", gap: '10px', alignItems: "flex-start" }}>
            {children}
            <Tooltip.Arrow className="TooltipArrow"/>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

