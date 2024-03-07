import adminCheckerRoutes from "./admin-checker"
import adminDriverRoutes from "./admin-driver"
import adminMaterialMovementRoutes from "./admin-material-movement"
import adminStationRoutes from "./admin-station"
import adminTruckRoutes from "./admin-truck"

const adminRoutes = [
  ...adminCheckerRoutes,
  ...adminDriverRoutes,
  ...adminTruckRoutes,
  ...adminStationRoutes,
  ...adminMaterialMovementRoutes,
]

export default adminRoutes
