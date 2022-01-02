import {
  FC, RefObject, useEffect, useMemo, useState,
} from 'react';
import { Item } from './item';
import { ItemContent } from './ItemContent';
import { Container } from './styles';

export interface contentProps {
	contentRef: (element: any) => any;
}

const WhyComponent: FC<contentProps> = ({ contentRef }) => (
  <div
    ref={contentRef}
    style={{ height: 120 }}
  >
    oi
  </div>
);
const WhyComponent2: FC<contentProps> = ({ contentRef }) => (
  <div
    ref={contentRef}
    style={{ height: 200 }}
  >
    oasdi
  </div>
);
interface menuItemType {
	title: string,
	content: FC<contentProps>
}

const menuItems: menuItemType[] = [
  {
    title: 'Why Strapi?',
    content: WhyComponent,
  },
  {
    title: 'Lorem ipsum',
    content: WhyComponent2,
  },
];

const Menu: FC = () => {
  const [activeItem, setActiveItem] = useState<null | string>(null);
  const [isOnItemContent, setisOnItemContentContent] = useState<boolean>(false);
  const [isOnItemMenu, setIsOnItemMenu] = useState<boolean>(false);

  const activeObject = useMemo(
    () => menuItems.find((item) => item.title === activeItem),
    [activeItem],
  );

  useEffect(() => {
    if (!isOnItemContent && !isOnItemMenu) setActiveItem(null);
  }, [isOnItemMenu, isOnItemContent]);

  return (
    <Container>
      <div className="content">
        <img src="https://strapi.io/assets/strapi-logo-dark.svg" alt="logo" className="logo" />
        <nav>
          <ul>
            {menuItems.map((item) => (
              <Item
                hasContent={Boolean(item.content)}
                handleMouseState={setIsOnItemMenu}
                isActive={item.title === activeItem}
                key={item.title}
                handleActive={setActiveItem}
                {...item}
              />
            ))}
          </ul>
        </nav>
        <div>
          <h3>
            isOnItemContent
            {' '}
            {JSON.stringify(isOnItemContent)}
          </h3>
          <h3>
            isOnItemMenu
            {JSON.stringify(isOnItemMenu)}
          </h3>
        </div>
        <ItemContent
          content={activeObject?.content}
          isActive={Boolean(activeItem)}
          handleIsOnItem={setisOnItemContentContent}
        />
      </div>
    </Container>
  );
};

export { Menu };
