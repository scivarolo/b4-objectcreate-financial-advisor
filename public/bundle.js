(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

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
    value: [{
      stock: "TWTR",
      quantity: 100,
      price: 34.59,
      buyTransaction: true
    }],
    writable: true
  },
  worth: {
    value: function () {
      let totalWorth = 0;
      this.portfolio.forEach(function (transaction) {
        if (transaction.buyTransaction) {
          totalWorth += transaction.price * 100 * 100;
        } else {
          totalWorth -= transaction.price * 100 * transaction.quantity;
        }
      });
      totalWorth = totalWorth / 100;
      return totalWorth.toFixed(2);
    }
  },
  purchase: {
    value: function (stock, quantity, price) {
      let transaction = {
        stock: stock,
        quantity: quantity,
        price: price,
        buyTransaction: true
      };
      this.portfolio.push(transaction);
    }
  },
  sell: {
    value: function (stock, quantity, price) {
      let transaction = {
        stock: stock,
        quantity: quantity,
        price: price,
        buyTransaction: false //look for any transactions with this stock and calculate quantity currently owned.
        //Don't sell if trying to sell more than amount owned.

      };
      let ownedQuantity = 0;
      this.portfolio.forEach(transaction => {
        if (transaction.stock === stock) {
          if (transaction.buyTransaction === true) {
            ownedQuantity += transaction.quantity;
          } else if (transaction.buyTransaction === false) {
            ownedQuantity -= transaction.quantity;
          }
        }
      });

      if (ownedQuantity > quantity) {
        this.portfolio.push(transaction);
        alert(`You sold ${quantity} shares of ${stock}. You now own ${ownedQuantity - quantity} shares.`);
      } else {
        alert(`${quantity} shares of ${stock} cannot be sold. You only own ${ownedQuantity}.`);
      }
    }
  }
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxFQUFvQjtBQUNsQyxFQUFBLE9BQU8sRUFBRTtBQUNQLElBQUEsS0FBSyxFQUFFLGVBREE7QUFFUCxJQUFBLFVBQVUsRUFBRSxJQUZMO0FBR1AsSUFBQSxRQUFRLEVBQUU7QUFISCxHQUR5QjtBQU1sQyxFQUFBLFNBQVMsRUFBRTtBQUNULElBQUEsS0FBSyxFQUFFLFFBREU7QUFFVCxJQUFBLFVBQVUsRUFBRSxJQUZIO0FBR1QsSUFBQSxRQUFRLEVBQUU7QUFIRCxHQU51QjtBQVdsQyxFQUFBLElBQUksRUFBRTtBQUNKLElBQUEsS0FBSyxFQUFFLFlBREg7QUFFSixJQUFBLFVBQVUsRUFBRTtBQUZSLEdBWDRCO0FBZWxDLEVBQUEsU0FBUyxFQUFFO0FBQ1QsSUFBQSxLQUFLLEVBQUUsQ0FDTDtBQUNFLE1BQUEsS0FBSyxFQUFFLE1BRFQ7QUFFRSxNQUFBLFFBQVEsRUFBRSxHQUZaO0FBR0UsTUFBQSxLQUFLLEVBQUUsS0FIVDtBQUlFLE1BQUEsY0FBYyxFQUFFO0FBSmxCLEtBREssQ0FERTtBQVNULElBQUEsUUFBUSxFQUFFO0FBVEQsR0FmdUI7QUEwQmxDLEVBQUEsS0FBSyxFQUFFO0FBQ0wsSUFBQSxLQUFLLEVBQUUsWUFBWTtBQUNqQixVQUFJLFVBQVUsR0FBRyxDQUFqQjtBQUNBLFdBQUssU0FBTCxDQUFlLE9BQWYsQ0FBdUIsVUFBVSxXQUFWLEVBQXVCO0FBQzVDLFlBQUcsV0FBVyxDQUFDLGNBQWYsRUFBK0I7QUFDN0IsVUFBQSxVQUFVLElBQU0sV0FBVyxDQUFDLEtBQVosR0FBb0IsR0FBckIsR0FBNEIsR0FBM0M7QUFDRCxTQUZELE1BRU87QUFDTCxVQUFBLFVBQVUsSUFBTSxXQUFXLENBQUMsS0FBWixHQUFvQixHQUFyQixHQUE0QixXQUFXLENBQUMsUUFBdkQ7QUFDRDtBQUNGLE9BTkQ7QUFPQSxNQUFBLFVBQVUsR0FBRyxVQUFVLEdBQUcsR0FBMUI7QUFDQSxhQUFPLFVBQVUsQ0FBQyxPQUFYLENBQW1CLENBQW5CLENBQVA7QUFDRDtBQVpJLEdBMUIyQjtBQXdDbEMsRUFBQSxRQUFRLEVBQUU7QUFDUixJQUFBLEtBQUssRUFBRSxVQUFVLEtBQVYsRUFBaUIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0M7QUFDdkMsVUFBSSxXQUFXLEdBQUc7QUFDaEIsUUFBQSxLQUFLLEVBQUUsS0FEUztBQUVoQixRQUFBLFFBQVEsRUFBRSxRQUZNO0FBR2hCLFFBQUEsS0FBSyxFQUFFLEtBSFM7QUFJaEIsUUFBQSxjQUFjLEVBQUU7QUFKQSxPQUFsQjtBQU1BLFdBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsV0FBcEI7QUFDRDtBQVRPLEdBeEN3QjtBQW1EbEMsRUFBQSxJQUFJLEVBQUU7QUFDSixJQUFBLEtBQUssRUFBRSxVQUFVLEtBQVYsRUFBaUIsUUFBakIsRUFBMkIsS0FBM0IsRUFBa0M7QUFDdkMsVUFBSSxXQUFXLEdBQUc7QUFDaEIsUUFBQSxLQUFLLEVBQUUsS0FEUztBQUVoQixRQUFBLFFBQVEsRUFBRSxRQUZNO0FBR2hCLFFBQUEsS0FBSyxFQUFFLEtBSFM7QUFJaEIsUUFBQSxjQUFjLEVBQUUsS0FKQSxDQU1sQjtBQUNBOztBQVBrQixPQUFsQjtBQVFBLFVBQUksYUFBYSxHQUFHLENBQXBCO0FBRUEsV0FBSyxTQUFMLENBQWUsT0FBZixDQUF1QixXQUFXLElBQUk7QUFDcEMsWUFBSSxXQUFXLENBQUMsS0FBWixLQUFzQixLQUExQixFQUFpQztBQUMvQixjQUFJLFdBQVcsQ0FBQyxjQUFaLEtBQStCLElBQW5DLEVBQXlDO0FBQ3ZDLFlBQUEsYUFBYSxJQUFJLFdBQVcsQ0FBQyxRQUE3QjtBQUNELFdBRkQsTUFFTyxJQUFJLFdBQVcsQ0FBQyxjQUFaLEtBQStCLEtBQW5DLEVBQTBDO0FBQy9DLFlBQUEsYUFBYSxJQUFJLFdBQVcsQ0FBQyxRQUE3QjtBQUNEO0FBQ0Y7QUFDRixPQVJEOztBQVNBLFVBQUksYUFBYSxHQUFHLFFBQXBCLEVBQThCO0FBQzVCLGFBQUssU0FBTCxDQUFlLElBQWYsQ0FBb0IsV0FBcEI7QUFDQSxRQUFBLEtBQUssQ0FBRSxZQUFXLFFBQVMsY0FBYSxLQUFNLGlCQUFnQixhQUFhLEdBQUcsUUFBUyxVQUFsRixDQUFMO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsUUFBQSxLQUFLLENBQUUsR0FBRSxRQUFTLGNBQWEsS0FBTSxpQ0FBZ0MsYUFBYyxHQUE5RSxDQUFMO0FBQ0Q7QUFDRjtBQTNCRztBQW5ENEIsQ0FBcEIsQ0FBaEIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBBZHZpc29yID0gT2JqZWN0LmNyZWF0ZShudWxsLCB7XG4gIGNvbXBhbnk6IHtcbiAgICB2YWx1ZTogXCJTdG9jayBDb21wYW55XCIsXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZVxuICB9LFxuICBzcGVjaWFsdHk6IHtcbiAgICB2YWx1ZTogXCJTdG9ja3NcIixcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0sXG4gIG5hbWU6IHtcbiAgICB2YWx1ZTogXCJBbCBBZHZpc29yXCIsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9LFxuICBwb3J0Zm9saW86IHtcbiAgICB2YWx1ZTogW1xuICAgICAge1xuICAgICAgICBzdG9jazogXCJUV1RSXCIsXG4gICAgICAgIHF1YW50aXR5OiAxMDAsXG4gICAgICAgIHByaWNlOiAzNC41OSxcbiAgICAgICAgYnV5VHJhbnNhY3Rpb246IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0sXG4gIHdvcnRoOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCB0b3RhbFdvcnRoID0gMDtcbiAgICAgIHRoaXMucG9ydGZvbGlvLmZvckVhY2goZnVuY3Rpb24gKHRyYW5zYWN0aW9uKSB7XG4gICAgICAgIGlmKHRyYW5zYWN0aW9uLmJ1eVRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgdG90YWxXb3J0aCArPSAoKHRyYW5zYWN0aW9uLnByaWNlICogMTAwKSAqIDEwMClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3RhbFdvcnRoIC09ICgodHJhbnNhY3Rpb24ucHJpY2UgKiAxMDApICogdHJhbnNhY3Rpb24ucXVhbnRpdHkpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICB0b3RhbFdvcnRoID0gdG90YWxXb3J0aCAvIDEwMFxuICAgICAgcmV0dXJuIHRvdGFsV29ydGgudG9GaXhlZCgyKVxuICAgIH1cbiAgfSxcbiAgcHVyY2hhc2U6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKHN0b2NrLCBxdWFudGl0eSwgcHJpY2UpIHtcbiAgICAgIGxldCB0cmFuc2FjdGlvbiA9IHtcbiAgICAgICAgc3RvY2s6IHN0b2NrLFxuICAgICAgICBxdWFudGl0eTogcXVhbnRpdHksXG4gICAgICAgIHByaWNlOiBwcmljZSxcbiAgICAgICAgYnV5VHJhbnNhY3Rpb246IHRydWVcbiAgICAgIH1cbiAgICAgIHRoaXMucG9ydGZvbGlvLnB1c2godHJhbnNhY3Rpb24pXG4gICAgfVxuICB9LFxuICBzZWxsOiB7XG4gICAgdmFsdWU6IGZ1bmN0aW9uIChzdG9jaywgcXVhbnRpdHksIHByaWNlKSB7XG4gICAgICBsZXQgdHJhbnNhY3Rpb24gPSB7XG4gICAgICAgIHN0b2NrOiBzdG9jayxcbiAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LFxuICAgICAgICBwcmljZTogcHJpY2UsXG4gICAgICAgIGJ1eVRyYW5zYWN0aW9uOiBmYWxzZVxuICAgICAgfVxuICAgICAgLy9sb29rIGZvciBhbnkgdHJhbnNhY3Rpb25zIHdpdGggdGhpcyBzdG9jayBhbmQgY2FsY3VsYXRlIHF1YW50aXR5IGN1cnJlbnRseSBvd25lZC5cbiAgICAgIC8vRG9uJ3Qgc2VsbCBpZiB0cnlpbmcgdG8gc2VsbCBtb3JlIHRoYW4gYW1vdW50IG93bmVkLlxuICAgICAgbGV0IG93bmVkUXVhbnRpdHkgPSAwO1xuXG4gICAgICB0aGlzLnBvcnRmb2xpby5mb3JFYWNoKHRyYW5zYWN0aW9uID0+IHtcbiAgICAgICAgaWYgKHRyYW5zYWN0aW9uLnN0b2NrID09PSBzdG9jaykge1xuICAgICAgICAgIGlmICh0cmFuc2FjdGlvbi5idXlUcmFuc2FjdGlvbiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgb3duZWRRdWFudGl0eSArPSB0cmFuc2FjdGlvbi5xdWFudGl0eVxuICAgICAgICAgIH0gZWxzZSBpZiAodHJhbnNhY3Rpb24uYnV5VHJhbnNhY3Rpb24gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBvd25lZFF1YW50aXR5IC09IHRyYW5zYWN0aW9uLnF1YW50aXR5XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKG93bmVkUXVhbnRpdHkgPiBxdWFudGl0eSkge1xuICAgICAgICB0aGlzLnBvcnRmb2xpby5wdXNoKHRyYW5zYWN0aW9uKVxuICAgICAgICBhbGVydChgWW91IHNvbGQgJHtxdWFudGl0eX0gc2hhcmVzIG9mICR7c3RvY2t9LiBZb3Ugbm93IG93biAke293bmVkUXVhbnRpdHkgLSBxdWFudGl0eX0gc2hhcmVzLmApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydChgJHtxdWFudGl0eX0gc2hhcmVzIG9mICR7c3RvY2t9IGNhbm5vdCBiZSBzb2xkLiBZb3Ugb25seSBvd24gJHtvd25lZFF1YW50aXR5fS5gKVxuICAgICAgfVxuICAgIH1cbiAgfVxufSkiXX0=
