import { NavLink } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import routerMeta from '@/router/routerMeta';

const Nav = () => {
  return (
    <Breadcrumb>
      {Object.keys(routerMeta).map((componentKey: string) => {
        const menu = routerMeta[componentKey];

        if (menu.title === 'Home') return null;

        return (
          <BreadcrumbItem key={menu.path}>
            <BreadcrumbLink as={NavLink} to={menu.path}>
              {menu.title}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
};

export default Nav;
