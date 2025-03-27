// Question #1: Shipping Cost Calculator

function calculateShippingCost(totalPrice) {
  // เริ่มเขียนโค้ดตรงนี้
  let shipingPeice = []
  for(let i = 0 ; i < totalPrice.length ; i++){
    if(totalPrice[i].total >= 6000){
      shipingPeice.push(`Oder ${totalPrice[i].orderId} Shipping is free`)
    }
    else if(totalPrice[i].total >= 3000){
      shipingPeice.push(`Oder ${totalPrice[i].orderId} Shipping cost is 250 Baht.`)
    }else{
      shipingPeice.push(`Oder ${totalPrice[i].orderId} Shipping cost is 500 Baht.`)
    }
  }
  return shipingPeice
}

// ตัวอย่างการใช้งาน
const orders = [
  {
    orderId: 1,
    total: 6000,
  },
  {
    orderId: 2,
    total: 3000,
  },
  {
    orderId: 3,
    total: 150,
  },
];

console.log(calculateShippingCost(orders));
// Order Id 1: "Shipping is free."
// Order Id 2: "Shipping cost is 250 Baht."
// Order Id 3: "Shipping cost is 500 Baht."
