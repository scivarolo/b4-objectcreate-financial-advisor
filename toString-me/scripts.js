const Me = Object.create(null, {
  firstName: {
    value: "Sebastian"
  },
  lastName: {
    value: "Civarolo"
  },
  dateOfBirth: {
    value: "07/06/1989"
  },
  placeOfBirth: {
    value: "Houston, TX"
  },
  currentCity: {
    value: "Nashville",
    writable: true
  },
  currentState: {
    value: "TN",
    writable: true
  },
  toString: {
    value: function () {
      return `${this.firstName} ${this.lastName} was born in ${this.placeOfBirth}. He was born on ${this.dateOfBirth}. He currently lives in ${this.currentCity}, ${this.currentState}.`
    }
  }
})

document.querySelector('body').innerHTML = `<p>${Me.toString()}</p>`