/* Builds a document fragment containing advisor component */

import buildPortfolio from "./portfolioElement"

function buildAdvisor(advisor) {
  let advisorFrag = document.createDocumentFragment()
  let advisorEl = document.createElement("div")
  advisorEl.className = "advisor"
  advisorEl.setAttribute("id", `advisor-${advisor.name.split(" ").join("-")}`)
  advisorEl.innerHTML = `
    <h2>${advisor.name}</h2>
    <p>Company: ${advisor.company}</p>
    <p>Specialty: ${advisor.specialty}</p>
  `
  advisorFrag.appendChild(advisorEl)
  advisorFrag.appendChild(buildPortfolio(advisor))
  return advisorFrag
}

export default buildAdvisor