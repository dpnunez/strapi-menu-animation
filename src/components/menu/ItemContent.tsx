import {
  FC, Dispatch, SetStateAction, useEffect, useRef,
} from 'react';
import { ItemContentContainer } from './styles';

interface ItemContentProps {
	isActive: boolean,
	handleIsOnItem: Dispatch<SetStateAction<boolean>>,
	content?: FC<{ contentRef: (element: any) => any}>
}

const ItemContent: FC<ItemContentProps> = ({ isActive, handleIsOnItem, content: Content }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const state = isActive ? 'active' : 'inactive';

  const containerVariants = {
    active: {
      y: 0,
      scale: 1,
      opacity: 1,
    },
    inactive: {
      y: -20,
      scale: 0.97,
      opacity: 0,
    },
  };

  const setOnItem = () => handleIsOnItem(true);
  const setOutItem = () => handleIsOnItem(false);

  useEffect(() => {
    console.dir(contentRef.current);
  }, [contentRef]);

  return (
    <ItemContentContainer
      animate={state}
      variants={containerVariants}
      onMouseEnter={setOnItem}
      onMouseLeave={setOutItem}
    >
      <div className="item-content">
        {Content && (<Content contentRef={(element) => console.dir(element)} />)}
      </div>
    </ItemContentContainer>
  );
};

export { ItemContent };
