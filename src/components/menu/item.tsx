import {
  FC, Dispatch, SetStateAction, useState, useRef, useEffect,
} from 'react';
import { ItemContainer, ItemText, ActiveIndicator } from './styles';

interface ItemProps {
	title: string,
	hasContent: boolean,
	handleActive: Dispatch<SetStateAction<string | null>>
	isActive: boolean,
	handleMouseState: Dispatch<SetStateAction<boolean>>
}

const Item: FC<ItemProps> = ({
  title, hasContent, handleActive, isActive, handleMouseState, ...rest
}) => {
  const [textWidth, setTextWidth] = useState<number>(10);
  const textRef = useRef<HTMLSpanElement>(null);
  const state = isActive ? 'active' : 'inactive';

  const textVariants = {
    active: {
      color: '#8E75FF',
    },
    inactive: {
      color: '#0d0867',
    },
  };

  const indicatorVariants = {
    active: {
      x: 0,
    },
    false: {
      x: textWidth,
    },
    inactive: {
      x: textWidth,
    },
  };

  useEffect(() => {
    const element = textRef?.current;

    if (element) { setTextWidth(element.offsetWidth); }
  }, [textRef]);

  const handleEnter = () => {
    handleMouseState(true);
    handleActive(title);
  };

  const handleLeave = () => {
    handleMouseState(false);
  };

  return (
    <ItemContainer {...rest} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <ItemText
        animate={state}
        variants={textVariants}
        ref={textRef}
      >
        {title}
        {hasContent && ' ˅'}
        <ActiveIndicator
          initial={false}
          animate={state}
          variants={indicatorVariants}
        />
      </ItemText>
    </ItemContainer>
  );
};

export { Item };
