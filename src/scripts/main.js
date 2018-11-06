import Advisor from "./AdvisorMaster"
import buildAdvisor from "./AdvisorElement"
import render from "./render"

const JuliaKimChung = Object.create(Advisor, {
  specialty: {
    value: "Technology",
    enumerable: true,
    writable: true
  },
  name: {
    value: "Julia Kim Chung",
    enumerable: true
  },
  portfolio: {
    value: [
      {
        stock: "TWTR",
        quantity: 62,
        price: 34.59,
        buyTransaction: true
      },
      {
        stock: "AAPL",
        quantity: 55,
        price: 201.59,
        buyTransaction: true
      }
    ],
    writable: true
  }
})

render(buildAdvisor(JuliaKimChung), "#advisors")

const IkeNwaelele = Object.create(Advisor, {
  specialty: {
    value: "Technology",
    enumerable: true,
    writable: true
  },
  name: {
    value: "Ike Nwaelele",
    enumerable: true
  },
  portfolio: {
    value: [
      {
        stock: "MSFT",
        quantity: 125,
        price: 107.43,
        buyTransaction: true
      },
      {
        stock: "GOOGL",
        quantity: 47,
        price: 1067.47,
        buyTransaction: true
      }
    ],
    writable: true
  }

})

render(buildAdvisor(IkeNwaelele), "#advisors")


const FloRogers = Object.create(Advisor, {
  specialty: {
    value: "Technology",
    enumerable: true,
    writable: true
  },
  name: {
    value: "Flo Rogers",
    enumerable: true
  },
  portfolio: {
    value: [
      {
        stock: "MSFT",
        quantity: 91,
        price: 107.43,
        buyTransaction: true
      },
      {
        stock: "GOOGL",
        quantity: 42,
        price: 1067.47,
        buyTransaction: true
      }
    ],
    writable: true
  }

})

render(buildAdvisor(FloRogers), "#advisors")
