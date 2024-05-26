import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            React Bootstrap Typescript
          </Navbar.Brand>
        </Container>
      </Navbar>
  );
};

export default Header;
