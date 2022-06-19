import data from "./data.js";
const btnWashCar = document.querySelector('[data-btn="wash-car"]')
const btnMowLawn = document.querySelector('[data-btn="mow-lawn"]')
const btnPullWeeds = document.querySelector('[data-btn="pull-weeds"]')
const cartEl = document.querySelector('#cart')
const totalAmtEl = document.querySelector('#total-amt')
const btnSend = document.querySelector('[data-btn="btn-send"]')

let requests = []
let totalAmt = 0

btnWashCar.addEventListener("click", () => {
  const washCar = data[0]
  const found = requests.find(e => e.task === washCar.task)
  if (!found) {
    requests.push(washCar)
  } else {
    return
  }
  renderData()
  calcTotalAmt()
})

btnMowLawn.addEventListener("click", () => {
  const mowLawn = data[1]
  const found = requests.find(e => e.task === mowLawn.task)
  if (!found) {
    requests.push(mowLawn)
  } else {
    return
  }
  renderData()
  calcTotalAmt()
})

btnPullWeeds.addEventListener("click", () => {
  const pullWeeds = data[2]
  const found = requests.find(e => e.task === pullWeeds.task)
  if (!found) {
    requests.push(pullWeeds)
  } else {
    return
  }
  renderData()
  calcTotalAmt()
})

const calcTotalAmt = () => {
  for (let i = 0; i < requests.length; i++) {
    totalAmt = requests.reduce((a, b) => a + b.price, 0)
  }
  totalAmtEl.innerHTML = `<tr><td class="notes">We accept cash, credit card, or PayPal</td><td>$${totalAmt}</td></tr>`
}

const renderData = () => {
  let tblRow = ""
  for (let i = 0; i < requests.length; i++) {
    tblRow +=
      `<tr><td>${requests[i].task}<button class="btn-remove" data-btn="remove">Remove</button></td><td>$${requests[i].price}</td></tr>`
  }
  cartEl.innerHTML = `<tr class="t-head">
  <th>TASK</th>
  <th>TOTAL</th>
  </tr>${tblRow}`
}

btnSend.addEventListener("click", () => {
  cartEl.innerHTML = ""
  totalAmtEl.innerHTML = ""
  requests.length = 0
})


// const remove = () => {
//   btnRemove.addEventListener("click", () => {

//   })
// }

  // for (let i = 0; i < services.length; i++) {
  //   const prices = services[i].price
  //   const charged = prices.find(element => element === 10)
  //   if (!charged) {
  //     services.push(service)
  //     console.log(services)
  //   }
  // }
  // for (let i = 0; i < services.length; i++) {
  // const tasks = services[i].price
  // const charged = tasks.find(element => element === 10)
  // if (services.length < 1 || services.length < 3) {
  //   services.push(service)
  //   console.log(services)
  // } else {
  //   return
  // }
  // }


// btnWashCar.addEventListener("click", () => {
//   let task = services[0][0]
//   let amt = services[0][1]
//   subAmt1 = subAmt1 + amt
//   task1El.textContent = task
//   subAmt1El.textContent = subAmt1
// calcTotalAmt()
// })

// if (services.length < 1 || services.length < 3) {
//   services.push(service)
//   console.log(services)
// } else {
//   return
// }
// for (let i = 0; i < services.length; i++) {
//   const tasks = services[i].price
//   const charged = tasks.find(element => element === 20)
//   if (!charged) {
//     services.push(service)
//     console.log(services)
//   } else {
//     return
//   }
// }

// btnMowLawn.addEventListener("click", () => {
//   let task = services[1][0]
//   let amt = services[1][1]
//   subAmt2 = subAmt2 + amt
//   task2El.textContent = task
//   subAmt2El.textContent = subAmt2
// calcTotalAmt()
// })

// for (let i = 0; i < services.length; i++) {
//   const tasks = services[i].price
//   const charged = tasks.find(element => element === 30)
//   if (!charged) {
//     services.push(service)
//     console.log(services)
//   } else {
//     return
//   }
// }

// btnPullWeeds.addEventListener("click", () => {
//   let task = services[2][0]
//   let amt = services[2][1]
//   subAmt3 = subAmt3 + amt
//   task3El.textContent = task
//   subAmt3El.textContent = subAmt3
//   calcTotalAmt()
// })

// const calcTotalAmt = () => {
//   totalAmt = subAmt1 + subAmt2 + subAmt3
//   return totalAmtEl.textContent = totalAmt
// }


// const arr = [1, 2, 3]
// let total = 0

// for (let i = 0; i < arr.length; i++) {
//   total += arr[i]
//   console.log(arr[i])
// }
// console.log(total)

// import services from "./services.js";
// const btnWashCar = document.querySelector('[data-btn="wash-car"]')
// const btnMowLawn = document.querySelector('[data-btn="mow-lawn"]')
// const btnPullWeeds = document.querySelector('[data-btn="pull-weeds"]')
// const totalAmtEl = document.querySelector('#total-amt')
// const task1El = document.querySelector('#task1')
// const task2El = document.querySelector('#task2')
// const task3El = document.querySelector('#task3')
// const subAmt1El = document.querySelector('#sub-amt1')
// const subAmt2El = document.querySelector('#sub-amt2')
// const subAmt3El = document.querySelector('#sub-amt3')
// let totalAmt = 0
// let subAmt1 = 0
// let subAmt2 = 0
// let subAmt3 = 0

// btnWashCar.addEventListener("click", () => {
//   let task = services[0][0]
//   let amt = services[0][1]
//   subAmt1 = subAmt1 + amt
//   task1El.textContent = task
//   subAmt1El.textContent = subAmt1
//   calcTotalAmt()
// })

// btnMowLawn.addEventListener("click", () => {
//   let task = services[1][0]
//   let amt = services[1][1]
//   subAmt2 = subAmt2 + amt
//   task2El.textContent = task
//   subAmt2El.textContent = subAmt2
//   calcTotalAmt()
// })

// btnPullWeeds.addEventListener("click", () => {
//   let task = services[2][0]
//   let amt = services[2][1]
//   subAmt3 = subAmt3 + amt
//   task3El.textContent = task
//   subAmt3El.textContent = subAmt3
//   calcTotalAmt()
// })

// const calcTotalAmt = () => {
//   totalAmt = subAmt1 + subAmt2 + subAmt3
//   return totalAmtEl.textContent = totalAmt
// }


// const arr = [1, 2, 3]
// let total = 0

// for (let i = 0; i < arr.length; i++) {
//   total += arr[i]
//   console.log(arr[i])
// }
// console.log(total)









