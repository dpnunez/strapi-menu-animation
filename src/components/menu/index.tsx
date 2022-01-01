import { FC, useState } from 'react';
import { Item } from './item';
import { Container } from './styles';

interface menuItemType {
	title: string,
	hasContent: boolean
}

const menuItems: menuItemType[] = [
  {
    title: 'Why Strapi?',
    hasContent: true,
  },
  {
    title: 'Lorem ipsum',
    hasContent: false,
  },
];

const Menu: FC = () => {
  const [activeItem, setActiveItem] = useState<null | string>(null);

  return (
    <Container>
      <div className="content">
        <img src="https://strapi.io/assets/strapi-logo-dark.svg" alt="logo" className="logo" />
        <nav>
          <ul>
            {menuItems.map((item) => (
              <Item
                isActive={item.title === activeItem}
                key={item.title}
                handleActive={setActiveItem}
                {...item}
              />
            ))}
          </ul>
        </nav>
        <h2 className="right-el">{activeItem}</h2>
      </div>
    </Container>
  );
};

export { Menu };
