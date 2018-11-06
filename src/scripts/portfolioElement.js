/* Builds a document fragment containing an advisor's portfolio */

function buildPortfolio(advisor) {
  const portfolio = advisor.portfolio
  console.log("Portfolio:", portfolio)
  let fragment = document.createDocumentFragment()
  let heading = document.createElement("h3")
  heading.textContent = "Portfolio"
  fragment.appendChild(heading)
  let portfolioEl = document.createElement("ul")

  for (let stock of portfolio) {
    let stockEl = document.createElement("li")
    stockEl.innerHTML = `
      <p>${stock.stock}: ${stock.quantity} shares</p>
    `
    portfolioEl.appendChild(stockEl)
  }
  fragment.appendChild(portfolioEl)
  return fragment
}

export default buildPortfolio