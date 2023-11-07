import { ComponentProps, FC, memo, MutableRefObject, ReactNode, useState } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import styled from 'styled-components';

type SideTooltipType = 'bottom' | 'left' | 'right' | 'top';
type AlignTooltipType = 'start' | 'center' | 'end';

interface TooltipProps extends ComponentProps<'div'> {
  side?: SideTooltipType;
  align?: AlignTooltipType;
  disable?: boolean;
  trigger: ReactNode;
  children: ReactNode;
  usePortal?: boolean;
  className?: string;
  sideOffset?: number;
  portalContainerRef?: MutableRefObject<HTMLElement>; // default: document.body
  disableHoverableContent?: boolean;
}
interface TypographyProps {
  color?: string;
  fontSize: string;
  fontWeight?: string;
  lineHeight?: string | number;
}

const DELAY_DURATION: number = 200;

const TooltipSbb: FC<TooltipProps> = memo(
  ({
     side = 'right',
     align = 'center',
     disable = true,
     trigger,
     children,
     usePortal = false,
     className,
     sideOffset = 5,
     portalContainerRef,
     disableHoverableContent = false,
     ...rest
   }) => {
    const [open, setOpen] = useState(false);

    const content = disable && (
      <Content align={align} side={side} sideOffset={sideOffset} avoidCollisions>
        <Typography fontSize="12px" lineHeight="16px" color={'#fff'}>
          {children}
        </Typography>
        <RadixTooltip.Arrow fill={'#262626'} />
      </Content>
    );

    return (
      <RadixTooltip.Provider
        delayDuration={DELAY_DURATION}
        disableHoverableContent={disableHoverableContent}
        {...rest}
      >
        <RadixTooltip.Root onOpenChange={setOpen} open={open}>
          <RadixTooltip.Trigger asChild className={className}>
            {trigger}
          </RadixTooltip.Trigger>
          {usePortal ? (
            <RadixTooltip.Portal container={portalContainerRef?.current}>{content}</RadixTooltip.Portal>
          ) : (
            content
          )}
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    );
  },
);

export default TooltipSbb;



const Content = styled(RadixTooltip.Content)`
    display: flex;
    position: relative;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    border-radius: 10px;
    padding: 11px 14px;
    color: #ffffff;
    background-color: #262626;
    user-select: none;
    animation-duration: 400ms;
    animation-timing-function: ease-in-out;
    will-change: transform, opacity;
    row-gap: 6px;
    max-width: 250px;
    z-index: 10;

    a {
        color: #528eff;
    }

    &[data-state='delayed-open'][data-side='top'] {
        animation-name: slideDownAndFade;
    }

    &[data-state='delayed-open'][data-side='right'] {
        animation-name: slideLeftAndFade;
    }

    &[data-state='delayed-open'][data-side='bottom'] {
        animation-name: slideUpAndFade;
    }

    &[data-state='delayed-open'][data-side='left'] {
        animation-name: slideRightAndFade;
    }

    @keyframes slideUpAndFade {
        from {
            opacity: 0;
            transform: translateY(4px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideRightAndFade {
        from {
            opacity: 0;
            transform: translateX(-4px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideDownAndFade {
        from {
            opacity: 0;
            transform: translateY(-4px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @keyframes slideLeftAndFade {
        from {
            opacity: 0;
            transform: translateX(4px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

const Typography = styled.span<TypographyProps>`
    display: contents;
    font-family: SB Sans Text;
    font-style: normal;
    font-weight: ${(props) => props.fontWeight || 600};
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.lineHeight};
    color: ${(props) => props.color || 'black'};
`;