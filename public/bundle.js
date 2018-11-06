(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* Builds a document fragment containing advisor component */
function buildAdvisor(advisor) {
  let advisorFrag = document.createDocumentFragment();
  let advisorEl = document.createElement("div");
  advisorEl.className = "advisor";
  advisorEl.setAttribute("id", `advisor-${advisor.name.split(" ").join("-")}`);
  advisorEl.innerHTML = `
    <h2>${advisor.name}</h2>
    <p>Company: ${advisor.company}</p>
    <p>Specialty: ${advisor.specialty}</p>
  `;
  advisorFrag.appendChild(advisorEl);
  return advisorFrag;
}

var _default = buildAdvisor;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Advisor = Object.create(null, {
  company: {
    value: "The Stock Company",
    enumerable: true,
    writable: true
  },
  specialty: {
    value: "Technology",
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
    }, {
      stock: "AAPL",
      quantity: 47,
      price: 201.59,
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
var _default = Advisor;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _AdvisorMaster = _interopRequireDefault(require("./AdvisorMaster"));

var _AdvisorElement = _interopRequireDefault(require("./AdvisorElement"));

var _render = _interopRequireDefault(require("./render"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _render.default)((0, _AdvisorElement.default)(_AdvisorMaster.default), "#advisors");

},{"./AdvisorElement":1,"./AdvisorMaster":2,"./render":4}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* Responsible for rendering elements to the DOM. */
function render(element, location) {
  document.querySelector(location).appendChild(element);
}

var _default = render;
exports.default = _default;

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL0Fkdmlzb3JFbGVtZW50LmpzIiwiLi4vc2NyaXB0cy9BZHZpc29yTWFzdGVyLmpzIiwiLi4vc2NyaXB0cy9tYWluLmpzIiwiLi4vc2NyaXB0cy9yZW5kZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7QUFFQSxTQUFTLFlBQVQsQ0FBc0IsT0FBdEIsRUFBK0I7QUFDN0IsTUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLHNCQUFULEVBQWxCO0FBQ0EsTUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQSxFQUFBLFNBQVMsQ0FBQyxTQUFWLEdBQXNCLFNBQXRCO0FBQ0EsRUFBQSxTQUFTLENBQUMsWUFBVixDQUF1QixJQUF2QixFQUE4QixXQUFVLE9BQU8sQ0FBQyxJQUFSLENBQWEsS0FBYixDQUFtQixHQUFuQixFQUF3QixJQUF4QixDQUE2QixHQUE3QixDQUFrQyxFQUExRTtBQUNBLEVBQUEsU0FBUyxDQUFDLFNBQVYsR0FBdUI7VUFDZixPQUFPLENBQUMsSUFBSztrQkFDTCxPQUFPLENBQUMsT0FBUTtvQkFDZCxPQUFPLENBQUMsU0FBVTtHQUhwQztBQUtBLEVBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsU0FBeEI7QUFDQSxTQUFPLFdBQVA7QUFDRDs7ZUFFYyxZOzs7Ozs7Ozs7O0FDaEJmLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFQLENBQWMsSUFBZCxFQUFvQjtBQUNsQyxFQUFBLE9BQU8sRUFBRTtBQUNQLElBQUEsS0FBSyxFQUFFLG1CQURBO0FBRVAsSUFBQSxVQUFVLEVBQUUsSUFGTDtBQUdQLElBQUEsUUFBUSxFQUFFO0FBSEgsR0FEeUI7QUFNbEMsRUFBQSxTQUFTLEVBQUU7QUFDVCxJQUFBLEtBQUssRUFBRSxZQURFO0FBRVQsSUFBQSxVQUFVLEVBQUUsSUFGSDtBQUdU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QUFhLEtBQU0saUNBQWdDLGFBQWMsR0FBOUUsQ0FBTDtBQUNEO0FBQ0Y7QUEzQkc7QUF6RDRCLENBQXBCLENBQWhCO2VBd0ZlLE87Ozs7OztBQ3hGZjs7QUFDQTs7QUFDQTs7OztBQUVBLHFCQUFPLDZCQUFhLHNCQUFiLENBQVAsRUFBOEIsV0FBOUI7Ozs7Ozs7Ozs7QUNKQTtBQUVBLFNBQVMsTUFBVCxDQUFnQixPQUFoQixFQUF5QixRQUF6QixFQUFtQztBQUNqQyxFQUFBLFFBQVEsQ0FBQyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLFdBQWpDLENBQTZDLE9BQTdDO0FBQ0Q7O2VBRWMsTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8qIEJ1aWxkcyBhIGRvY3VtZW50IGZyYWdtZW50IGNvbnRhaW5pbmcgYWR2aXNvciBjb21wb25lbnQgKi9cblxuZnVuY3Rpb24gYnVpbGRBZHZpc29yKGFkdmlzb3IpIHtcbiAgbGV0IGFkdmlzb3JGcmFnID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gIGxldCBhZHZpc29yRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gIGFkdmlzb3JFbC5jbGFzc05hbWUgPSBcImFkdmlzb3JcIlxuICBhZHZpc29yRWwuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGFkdmlzb3ItJHthZHZpc29yLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCItXCIpfWApXG4gIGFkdmlzb3JFbC5pbm5lckhUTUwgPSBgXG4gICAgPGgyPiR7YWR2aXNvci5uYW1lfTwvaDI+XG4gICAgPHA+Q29tcGFueTogJHthZHZpc29yLmNvbXBhbnl9PC9wPlxuICAgIDxwPlNwZWNpYWx0eTogJHthZHZpc29yLnNwZWNpYWx0eX08L3A+XG4gIGBcbiAgYWR2aXNvckZyYWcuYXBwZW5kQ2hpbGQoYWR2aXNvckVsKVxuICByZXR1cm4gYWR2aXNvckZyYWdcbn1cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGRBZHZpc29yIiwiY29uc3QgQWR2aXNvciA9IE9iamVjdC5jcmVhdGUobnVsbCwge1xuICBjb21wYW55OiB7XG4gICAgdmFsdWU6IFwiVGhlIFN0b2NrIENvbXBhbnlcIixcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0sXG4gIHNwZWNpYWx0eToge1xuICAgIHZhbHVlOiBcIlRlY2hub2xvZ3lcIixcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIHdyaXRhYmxlOiB0cnVlXG4gIH0sXG4gIG5hbWU6IHtcbiAgICB2YWx1ZTogXCJBbCBBZHZpc29yXCIsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9LFxuICBwb3J0Zm9saW86IHtcbiAgICB2YWx1ZTogW1xuICAgICAge1xuICAgICAgICBzdG9jazogXCJUV1RSXCIsXG4gICAgICAgIHF1YW50aXR5OiAxMDAsXG4gICAgICAgIHByaWNlOiAzNC41OSxcbiAgICAgICAgYnV5VHJhbnNhY3Rpb246IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHN0b2NrOiBcIkFBUExcIixcbiAgICAgICAgcXVhbnRpdHk6IDQ3LFxuICAgICAgICBwcmljZTogMjAxLjU5LFxuICAgICAgICBidXlUcmFuc2FjdGlvbjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgd3JpdGFibGU6IHRydWVcbiAgfSxcbiAgd29ydGg6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgbGV0IHRvdGFsV29ydGggPSAwO1xuICAgICAgdGhpcy5wb3J0Zm9saW8uZm9yRWFjaChmdW5jdGlvbiAodHJhbnNhY3Rpb24pIHtcbiAgICAgICAgaWYodHJhbnNhY3Rpb24uYnV5VHJhbnNhY3Rpb24pIHtcbiAgICAgICAgICB0b3RhbFdvcnRoICs9ICgodHJhbnNhY3Rpb24ucHJpY2UgKiAxMDApICogMTAwKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvdGFsV29ydGggLT0gKCh0cmFuc2FjdGlvbi5wcmljZSAqIDEwMCkgKiB0cmFuc2FjdGlvbi5xdWFudGl0eSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHRvdGFsV29ydGggPSB0b3RhbFdvcnRoIC8gMTAwXG4gICAgICByZXR1cm4gdG90YWxXb3J0aC50b0ZpeGVkKDIpXG4gICAgfVxuICB9LFxuICBwdXJjaGFzZToge1xuICAgIHZhbHVlOiBmdW5jdGlvbiAoc3RvY2ssIHF1YW50aXR5LCBwcmljZSkge1xuICAgICAgbGV0IHRyYW5zYWN0aW9uID0ge1xuICAgICAgICBzdG9jazogc3RvY2ssXG4gICAgICAgIHF1YW50aXR5OiBxdWFudGl0eSxcbiAgICAgICAgcHJpY2U6IHByaWNlLFxuICAgICAgICBidXlUcmFuc2FjdGlvbjogdHJ1ZVxuICAgICAgfVxuICAgICAgdGhpcy5wb3J0Zm9saW8ucHVzaCh0cmFuc2FjdGlvbilcbiAgICB9XG4gIH0sXG4gIHNlbGw6IHtcbiAgICB2YWx1ZTogZnVuY3Rpb24gKHN0b2NrLCBxdWFudGl0eSwgcHJpY2UpIHtcbiAgICAgIGxldCB0cmFuc2FjdGlvbiA9IHtcbiAgICAgICAgc3RvY2s6IHN0b2NrLFxuICAgICAgICBxdWFudGl0eTogcXVhbnRpdHksXG4gICAgICAgIHByaWNlOiBwcmljZSxcbiAgICAgICAgYnV5VHJhbnNhY3Rpb246IGZhbHNlXG4gICAgICB9XG4gICAgICAvL2xvb2sgZm9yIGFueSB0cmFuc2FjdGlvbnMgd2l0aCB0aGlzIHN0b2NrIGFuZCBjYWxjdWxhdGUgcXVhbnRpdHkgY3VycmVudGx5IG93bmVkLlxuICAgICAgLy9Eb24ndCBzZWxsIGlmIHRyeWluZyB0byBzZWxsIG1vcmUgdGhhbiBhbW91bnQgb3duZWQuXG4gICAgICBsZXQgb3duZWRRdWFudGl0eSA9IDA7XG5cbiAgICAgIHRoaXMucG9ydGZvbGlvLmZvckVhY2godHJhbnNhY3Rpb24gPT4ge1xuICAgICAgICBpZiAodHJhbnNhY3Rpb24uc3RvY2sgPT09IHN0b2NrKSB7XG4gICAgICAgICAgaWYgKHRyYW5zYWN0aW9uLmJ1eVRyYW5zYWN0aW9uID09PSB0cnVlKSB7XG4gICAgICAgICAgICBvd25lZFF1YW50aXR5ICs9IHRyYW5zYWN0aW9uLnF1YW50aXR5XG4gICAgICAgICAgfSBlbHNlIGlmICh0cmFuc2FjdGlvbi5idXlUcmFuc2FjdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIG93bmVkUXVhbnRpdHkgLT0gdHJhbnNhY3Rpb24ucXVhbnRpdHlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBpZiAob3duZWRRdWFudGl0eSA+IHF1YW50aXR5KSB7XG4gICAgICAgIHRoaXMucG9ydGZvbGlvLnB1c2godHJhbnNhY3Rpb24pXG4gICAgICAgIGFsZXJ0KGBZb3Ugc29sZCAke3F1YW50aXR5fSBzaGFyZXMgb2YgJHtzdG9ja30uIFlvdSBub3cgb3duICR7b3duZWRRdWFudGl0eSAtIHF1YW50aXR5fSBzaGFyZXMuYClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KGAke3F1YW50aXR5fSBzaGFyZXMgb2YgJHtzdG9ja30gY2Fubm90IGJlIHNvbGQuIFlvdSBvbmx5IG93biAke293bmVkUXVhbnRpdHl9LmApXG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBBZHZpc29yIiwiaW1wb3J0IEFkdmlzb3IgZnJvbSBcIi4vQWR2aXNvck1hc3RlclwiXG5pbXBvcnQgYnVpbGRBZHZpc29yIGZyb20gXCIuL0Fkdmlzb3JFbGVtZW50XCJcbmltcG9ydCByZW5kZXIgZnJvbSBcIi4vcmVuZGVyXCJcblxucmVuZGVyKGJ1aWxkQWR2aXNvcihBZHZpc29yKSwgXCIjYWR2aXNvcnNcIilcbiIsIi8qIFJlc3BvbnNpYmxlIGZvciByZW5kZXJpbmcgZWxlbWVudHMgdG8gdGhlIERPTS4gKi9cblxuZnVuY3Rpb24gcmVuZGVyKGVsZW1lbnQsIGxvY2F0aW9uKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobG9jYXRpb24pLmFwcGVuZENoaWxkKGVsZW1lbnQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlciJdfQ==
