class Automobili {
  constructor(manufacturer, engineType, consumption) {
    this.manufacturer = manufacturer;
    this.engineType = engineType;
    this.consumption = consumption;
  }

  drive(vozioKilometara) {
    console.log(`${this.manufacturer} je prešao ${vozioKilometara} kilometara.`);
  }

  fuelConsumption(kilometri) {
    this.drive(kilometri);
    const potrošenoGoriva = this.consumption * (kilometri / 100);
    console.log(`Potrošeno ${this.engineType}a: ${potrošenoGoriva}.`);
  }
}

const audi = new Automobili('Audi', 'dizel', 6);
const renoMegan = new Automobili('Reno', 'dizel', 4.3);
const golf7 = new Automobili('Golf 7', 'benzin', 9);

audi.fuelConsumption(40);
renoMegan.fuelConsumption(40);
golf7.fuelConsumption(40);