// Layouts
import { HeaderOnly } from '~/Layouts';
// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Router ko cần đăng nhập vẫn vào đc
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
