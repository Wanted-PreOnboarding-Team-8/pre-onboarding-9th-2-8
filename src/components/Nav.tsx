import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Breadcrumb position={'absolute'} m="20px">
      <BreadcrumbItem>
        <Link to="/main">main </Link>
      </BreadcrumbItem>

      <BreadcrumbItem ml="20px">
        <Link to="/reservations">reservations</Link>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Nav;
