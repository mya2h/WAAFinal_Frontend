// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

export const almuniNav = [
  {
    title: 'Job',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Event/Reunions',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'News/Announcements',
    path: '/dashboard/newsandannouncements',
    icon: icon('ic_disabled'),
  },
];
export const adminNav = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: 'Job',
    path: '/dashboard/blog',
    icon: icon('ic_blog'),
  },
  {
    title: 'Event/Reunions',
    path: '/dashboard/products',
    icon: icon('ic_cart'),
  },
  {
    title: 'News/Announcements',
    path: '/dashboard/newsandannouncements',
    icon: icon('ic_disabled'),
  },
  {
    title: 'Register User',
    path: '/dashboard/user',
    icon: icon('ic_lock'),
  },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

