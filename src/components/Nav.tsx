import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

const Nav = () => {
  return (
    <Breadcrumb position={'absolute'} m="20px">
      <BreadcrumbItem>
        <BreadcrumbLink href="/main" fontSize={'5xl'}>
          Main
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem ml="20px">
        <BreadcrumbLink href="/reservations" fontSize={'5xl'}>
          Reserv
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Nav;
