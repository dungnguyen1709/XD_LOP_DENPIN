
let Battery = function (energy) {

    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        this.decreaseEnergy();
        return this.energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    }
};