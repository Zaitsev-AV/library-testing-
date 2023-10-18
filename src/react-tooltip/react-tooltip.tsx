import { Tooltip } from 'react-tooltip'
import {FC} from "react";

/**
 * anchorSelect сюда передать id элемента к которому привязываемся для того чтобы отобразить тултип
 * place это где будет появляться тултип
 */

interface IReactTooltipProps {
  children: React.ReactNode
  anchorSelect: string
}


export const ReactTooltip: FC<IReactTooltipProps> = ({anchorSelect, children}) => {
  return (
    <Tooltip anchorSelect={anchorSelect} place="top">
      {children}
    </Tooltip>
  )
}