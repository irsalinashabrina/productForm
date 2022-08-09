import './App.css';
import ProductForm from './features/product/ProductForm';

// Tugas
// Refactor :
// 1. Pisahkan fitur / fungsi per directory
// 2. Buat shared component (atom component)
// 3. Gunakan context sbg dependency container
// 4. Ubah semua menggunakan function based component, gunakan hooks, termasuk pisahkan logic UI

function App() {
    return (
        <div className="App">
            <ProductForm/>
        </div>
    )
}

export default App;