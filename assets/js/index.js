class Vehicle {
    constructor(dimentions, brand, model, manufactureDate) {
        this.dimentions = dimentions;
        this.brand = brand;
        this.model = model;
        this.manufactureDate = manufactureDate;
    }

    getFullInfo() {
        return `Vehicle: brand - ${this.brand}, model - ${this.model}, age - ${this.getAge}`;
    }

    get getAge() {
        return new Date().getFullYear() - this.manufactureDate.getFullYear();
    }
}

class PassengerTransport extends Vehicle {
    constructor(dimentions, brand, model, manufactureDate, passengerLimit, passenderCount) {
        super(dimentions, brand, model, manufactureDate);
        this.passengerLimit = passengerLimit;
        this.passenderCount = passenderCount;
    }

    addPassanger() {
        if (this.passengerLimit > this.passenderCount) {
            this.passenderCount++;
            return true;
        } else {
            return false;
        }
    }

    getFullInfo() {
        return `Passenger transport: brand - ${this.brand}, model - ${this.model}, age - ${this.getAge}, passenger limit - ${this.passengerLimit}`;
    }
}

class FreightTransport extends Vehicle {
    constructor(dimentions, brand, model, manufactureDate, capacity) {
        super(dimentions, brand, model, manufactureDate);
        this.capacity = capacity;
    }

    checkLoadingPossibility(weight) {
        return this.capacity >= weight;
    }

    getFullInfo() {
        return `Freight transport: brand - ${this.brand}, model - ${this.model}, age - ${this.getAge}, capacity - ${this.capacity}`;
    }
}

const bmw = new Vehicle({ length: 5, width: 2, height: 1.5 }, 'BMW', '328', new Date(2016, 0, 1));
console.log(bmw.getFullInfo());

const mecedes = new PassengerTransport({ length: 10, width: 3, height: 3 }, 'Mercedes', 'G20', new Date(2018, 0, 1), 5, 4);
console.log(mecedes.getFullInfo());
console.log('Passenger added to mercedes:', mecedes.addPassanger());
console.log('Passenger added to mercedes:', mecedes.addPassanger());

const truck = new FreightTransport({ length: 15, width: 4, height: 4 }, "Tesla", 'Truck 4', new Date(2020, 0, 1), 10000);
console.log(truck.getFullInfo());
console.log('Track can transtort 8000 kg: ', truck.checkLoadingPossibility(8000));
console.log('Track can transtort 12000 kg: ', truck.checkLoadingPossibility(12000));
