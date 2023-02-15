import Transaction from "./transaction"

interface Wallet{
    enable: boolean,
    transactions: Transaction[]
}

export default Wallet