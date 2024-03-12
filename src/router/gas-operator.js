import gasOperatorFuelLogHeavyVehicleRoutes from "./gas-operator-fuel-log-heavy-vehicle"
import gasOperatorFuelLogTruckRoutes from "./gas-operator-fuel-log-truck"

const gasOperatorRoutes = [
  ...gasOperatorFuelLogTruckRoutes,
  ...gasOperatorFuelLogHeavyVehicleRoutes,
]

export default gasOperatorRoutes
