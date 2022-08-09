/*
Tujuan React Context
1. membantu kita menyelesaikan masalah props drilling
Definisi Props drilling adalah pengiriman props ke nested component yang membutuhkan
dan melewati component" laen yang tidak membutuhkan props tersebut

2. Memudahkan kita mengkonsumsi data secara global
Rekomendasi data yang bisa disimpan di context adalah data yang jarang sekali dilakukan update
- Theme data (like dark or light mode)
- User data (the currently authenticated user)
- Location-specific data (like user language or locale)
 */


import ProductForm from "./features/product/ProductForm";


const App=()=>{
    return(
        <div className="App">
            <ProductForm/>
        </div>
    )
}

export default App;
