const Advisor = Object.create(null, {
  company: {
    value: "Stock Company",
    enumerable: true,
    writable: true
  },
  specialty: {
    value: "Stocks",
    enumerable: true,
    writable: true
  },
  name: {
    value: "Al Advisor",
    enumerable: true
  },
  portfolio: {
    value: [
      {
        stock: "TWTR",
        quantity: 100,
        price: 34.59,
        buyTransaction: true
      }
    ]
  },
  worth: {
    value: function () {
      let totalWorth = 0;
      this.portfolio.forEach(function (transaction) {
        if(transaction.buyTransaction) {
          totalWorth += ((transaction.price * 100) * 100)
        } else {
          totalWorth -= ((transaction.price * 100) * transaction.quantity)
        }
      })
      totalWorth = totalWorth / 100
      return totalWorth.toFixed(2)
    }
  },
  purchase: {
    value: function (stock, quantity, price) {
      let transaction = {
        stock: stock,
        quantity: quantity,
        price: price,
        buyTransaction: true
      }
      this.portfolio.push(transaction)
    }
  }
})