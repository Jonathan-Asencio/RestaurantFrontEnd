export default interface Order {
    name: string,
    items: {name: string, price: number}[]
}

