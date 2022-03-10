class Cars {
  constructor(manufacturer, engineType, consumption) {
    this.manufacturer = manufacturer;
    this.engineType = engineType;
    this.consumption = consumption;
  }

  drive(kilometersDriven) {
    console.log(`${this.manufacturer} je prešao ${kilometersDriven} kilometara.`);
  }

  fuelConsumption(kilemeters) {
    this.drive(kilemeters);
    const fuelSpent = this.consumption * (kilemeters / 100);
    console.log(`Potrošeno ${this.engineType}a: ${fuelSpent}.`);
  }
}

const audi = new Cars('Audi', 'dizel', 6);
const renoMegan = new Cars('Reno', 'dizel', 4.3);
const golf7 = new Cars('Golf 7', 'benzin', 9);

audi.fuelConsumption(40);
renoMegan.fuelConsumption(40);
golf7.fuelConsumption(40);