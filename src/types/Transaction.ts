interface Transaction{
   value: number,
   description: string,
   type: "C" | "D" 
}

// const teste: Transaction = {
//     description: "comprei pão",
//     value: 50,
//     type:"C"
// }

export default Transaction