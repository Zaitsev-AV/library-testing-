import * as Tooltip from '@radix-ui/react-tooltip';
import './radix-tooltip.css';
import React, {FC} from "react";
// import Arrow from '../assets/arrow.tsx';
type RadixTooltipProps = {
 trigger: React.ReactNode
 children: React.ReactNode
}

export const RadixTooltip:FC<RadixTooltipProps> = ({trigger, children}) => {
  return (
    <Tooltip.Provider delayDuration={5}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {trigger}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="TooltipContent" sideOffset={5} align={"center"} side={'right'}>
            {children}
            <Tooltip.Arrow className="TooltipArrow"/>
            {/*<Arrow/>*/}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

