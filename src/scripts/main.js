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
    ],
    writable: true
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
  },
  sell: {
    value: function (stock, quantity, price) {
      let transaction = {
        stock: stock,
        quantity: quantity,
        price: price,
        buyTransaction: false
      }
      //look for any transactions with this stock and calculate quantity currently owned.
      //Don't sell if trying to sell more than amount owned.
      let ownedQuantity = 0;

      this.portfolio.forEach(transaction => {
        if (transaction.stock === stock) {
          if (transaction.buyTransaction === true) {
            ownedQuantity += transaction.quantity
          } else if (transaction.buyTransaction === false) {
            ownedQuantity -= transaction.quantity
          }
        }
      })
      if (ownedQuantity > quantity) {
        this.portfolio.push(transaction)
        alert(`You sold ${quantity} shares of ${stock}. You now own ${ownedQuantity - quantity} shares.`)
      } else {
        alert(`${quantity} shares of ${stock} cannot be sold. You only own ${ownedQuantity}.`)
      }
    }
  }
})