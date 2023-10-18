import type {TooltipProps} from 'react-aria-components';
// import Arrow from "../assets/arrow.tsx";
import {Button, OverlayArrow, Tooltip, TooltipTrigger} from 'react-aria-components';
interface MyTooltipProps extends Omit<TooltipProps, 'children'> {
  children: React.ReactNode
}

export const ReactAreaTooltip = () => {
  return (


  <TooltipTrigger>
    <Button>✏️</Button>
    <Tooltip>
      <OverlayArrow>
        <svg width={8} height={8}>
          <path d="M0 0,L4 4,L8 0" />
        </svg>
      </OverlayArrow>
      Edit
    </Tooltip>
  </TooltipTrigger>
  );
}

