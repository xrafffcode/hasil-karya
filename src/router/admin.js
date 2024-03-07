import adminCheckerRoutes from "./admin-cheker"
import adminDriverRoutes from "./admin-driver"
import adminStationRoutes from "./admin-station"
import adminTruckRoutes from "./admin-truck"

const adminRoutes = [
    ...adminCheckerRoutes,
    ...adminDriverRoutes,
    ...adminTruckRoutes,
    ...adminStationRoutes
]

export default adminRoutes
