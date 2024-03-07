import adminCheckerRoutes from "./admin-cheker"
import adminDriverRoutes from "./admin-driver"
import adminTruckRoutes from "./admin-truck"

const adminRoutes = [
    ...adminCheckerRoutes,
    ...adminDriverRoutes,
    ...adminTruckRoutes
]

export default adminRoutes
