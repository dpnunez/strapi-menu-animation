import { FC } from 'react';
import { Container } from './styles';

const Menu: FC = () => (
  <Container>
    <div className="content">
      <img src="https://strapi.io/assets/strapi-logo-dark.svg" alt="logo" className="logo" />
      <nav>
        <ul>
          <li>Why Strapi?</li>
          <li>Solutions</li>
          <li>Open-source</li>
          <li>Pricing</li>
        </ul>
      </nav>
      <h2>Lorem ipsum</h2>
    </div>
  </Container>
);

export { Menu };
