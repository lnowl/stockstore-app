import React, { useState, useMemo } from 'react';
import { FaBoxOpen, FaWarehouse, FaExclamationTriangle, FaMoneyBillWave } from 'react-icons/fa';

const SAMPLE_PRODUCTS = [
  { id: 1, name: 'ท่อเหล็กกลม 3/4"', category: 'Steel', sku: 'ST-074', price: 420, stock: 120, unit: 'ชิ้น', supplier: 'ABC Steel Co.' },
  { id: 2, name: 'เหล็กตัวซี C100', category: 'Steel', sku: 'ST-C100', price: 980, stock: 24, unit: 'เส้น', supplier: 'Bangkok Metals' },
  { id: 3, name: 'ท่อ PVC 1" (ความยาว 4 เมตร)', category: 'PVC', sku: 'PVC-100', price: 135, stock: 400, unit: 'ท่อน', supplier: 'PVC Thailand' },
  { id: 4, name: 'ท่อ PVC 2" (ความยาว 4 เมตร)', category: 'PVC', sku: 'PVC-200', price: 240, stock: 90, unit: 'ท่อน', supplier: 'PVC Thailand' },
  { id: 5, name: 'สายไฟ THW 2.5 sq.mm (100m/ม้วน)', category: 'Wires', sku: 'W-2.5', price: 1650, stock: 30, unit: 'ม้วน', supplier: 'Electric Co.' },
  { id: 6, name: 'สายไฟ THW 4 sq.mm (100m/ม้วน)', category: 'Wires', sku: 'W-4', price: 2450, stock: 12, unit: 'ม้วน', supplier: 'Electric Co.' }
];

export default function StockStoreApp() {
  const [products, setProducts] = useState(SAMPLE_PRODUCTS);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [lowStockOnly, setLowStockOnly] = useState(false);
  const [cart, setCart] = useState([]);
  const [showAdmin, setShowAdmin] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', sku: '', price: '', stock: '', unit: '', supplier: '' });
  const [showDashboard, setShowDashboard] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const categories = useMemo(() => ['All', ...Array.from(new Set(products.map(p => p.category)))], [products]);

  const filtered = products.filter(p => {
    if (category !== 'All' && p.category !== category) return false;
    if (lowStockOnly && p.stock > 25) return false;
    if (query && !(`${p.name} ${p.sku} ${p.supplier}`.toLowerCase().includes(query.toLowerCase()))) return false;
    return true;
  });

  const totalStock = products.reduce((acc, p) => acc + p.stock, 0);
  const lowStockItems = products.filter(p => p.stock < 25).length;
  const totalProducts = products.length;
  const totalStockValue = products.reduce((acc, p) => acc + p.stock * p.price, 0);

  function handleLogin(e) {
    e.preventDefault();
    // ตัวอย่าง login แบบง่าย (username: admin, password: 1234)
    if(username === 'admin' && password === '1234') setIsLoggedIn(true);
    else alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
  }

  if(!isLoggedIn){
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0D1117' }}>
        <div className="bg-gray-900 p-8 rounded shadow-lg w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-white">เข้าสู่ระบบ StockStore</h2>
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input type="text" placeholder="ชื่อผู้ใช้" value={username} onChange={e => setUsername(e.target.value)} className="p-2 rounded bg-gray-800 text-white" />
            <input type="password" placeholder="รหัสผ่าน" value={password} onChange={e => setPassword(e.target.value)} className="p-2 rounded bg-gray-800 text-white" />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition">เข้าสู่ระบบ</button>
          </form>
        </div>
      </div>
    );
  }

  // ส่วนของเดิม StockStoreApp ... (เหมือนโค้ดเดิม)
  return (
    <div className="min-h-screen text-gray-200 font-sans" style={{ fontFamily: 'Sarabun, sans-serif', backgroundColor: '#0D1117' }}>
      <div className="max-w-7xl mx-auto p-4">
        {/* ... โค้ดเดิมทั้งหมดของ StockStoreApp ... */}
      </div>
    </div>
  );
}
