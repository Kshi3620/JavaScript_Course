const shopCart = [
    {
        course: "js",
        price: 199
    },
    {
        course: "java",
        price: 299
    },
    {
        course: "python",
        price: 99
    },
    {
        course: "data",
        price: 499
    }
]

const priceTopay = shopCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(priceTopay); // 1096
