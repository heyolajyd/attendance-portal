import { authRoutes } from 'features/auth/auth.routes';
import { dashRoute } from 'features/dashboard/dashboard.route';

const routeConfig = [...authRoutes, ...dashRoute];

console.log(routeConfig);

export default routeConfig;
