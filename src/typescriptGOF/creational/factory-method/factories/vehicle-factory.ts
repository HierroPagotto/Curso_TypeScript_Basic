import { Vehicle } from "../vehicle/vehicle"

export abstract class VehicleFactory {
  abstract getVehicle(cehicleName: string): Vehicle;


  pickUp(customerName: string, vehicleName: string): Vehicle {
    const car = this.getVehicle(vehicleName);
    car.pickUp(customerName);
    return car;
  }
}
