import {
  FC, Dispatch, SetStateAction, useState, useRef, useEffect,
} from 'react';
import { ItemContainer, ItemText, ActiveIndicator } from './styles';

interface ItemProps {
	title: string,
	hasContent: boolean,
	handleActive: Dispatch<SetStateAction<string | null>>
	isActive: boolean,
}

const Item: FC<ItemProps> = ({
  title, hasContent, handleActive, isActive, ...rest
}) => {
  const [textWidth, setTextWidth] = useState<number>(0);
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
      width: textWidth,
    },
    inactive: {
      width: 0,
    },
  };

  useEffect(() => {
    const element = textRef?.current;

    if (element) { setTextWidth(element.offsetWidth); }
  }, [textRef]);

  return (
    <ItemContainer {...rest} onMouseEnter={() => handleActive(title)}>
      <ItemText
        animate={state}
        variants={textVariants}
        ref={textRef}
      >
        {title}
        {hasContent && ' ˅'}
        <ActiveIndicator
          initial="inactive"
          animate={state}
          variants={indicatorVariants}
        />
      </ItemText>
    </ItemContainer>
  );
};

export { Item };
