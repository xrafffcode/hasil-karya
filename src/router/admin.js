import adminCheckerRoutes from "./admin-checker"
import adminClientRoutes from "./admin-client"
import adminDriverRoutes from "./admin-driver"
import adminFuelLogRoutes from "./admin-fuel-logs"
import adminGasOperatorRoutes from "./admin-gas-operator"
import adminHeavyVehicleRoutes from "./admin-heavy-vehicle"
import adminMaterialRoutes from "./admin-material"
import adminMaterialMovementRoutes from "./admin-material-movement"
import adminStationRoutes from "./admin-station"
import adminTechnicalAdminRoutes from "./admin-technical-admin"
import adminTruckRoutes from "./admin-truck"
import adminVehicleRentalRecordRoutes from "./admin-vehicle-rental-record"
import adminVendorRoutes from "./admin-vendor"

const adminRoutes = [
  ...adminCheckerRoutes,
  ...adminDriverRoutes,
  ...adminTruckRoutes,
  ...adminStationRoutes,
  ...adminMaterialMovementRoutes,
  ...adminVendorRoutes,
  ...adminClientRoutes,
  ...adminGasOperatorRoutes,
  ...adminHeavyVehicleRoutes,
  ...adminMaterialRoutes,
  ...adminVehicleRentalRecordRoutes,
  ...adminFuelLogRoutes,
  ...adminTechnicalAdminRoutes,
]

export default adminRoutes
