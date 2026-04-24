import { Search } from 'lucide-react';
import { useState } from 'react';

interface Order {
  id: string;
  customer: string;
  items: string;
  total: string;
  status: 'tertunda' | 'disiapkan' | 'selesai' | 'dibatalkan';
  time: string;
}

const mockOrders: Order[] = [
  { id: '#PSN-001', customer: 'Fadil Russian', items: 'Nasi Goreng, Es Teh', total: 'Rp17.000', status: 'selesai', time: '2h ago' },
  { id: '#PSN-002', customer: 'Jojo Nusantara', items: 'Mie Ayam', total: 'Rp12.000', status: 'disiapkan', time: '30m ago' },
  { id: '#PSN-003', customer: 'Pajri Cirebon', items: 'Pecel Lele, Es Jeruk', total: 'Rp17.000', status: 'tertunda', time: '15m ago' },
  { id: '#PSN-004', customer: 'Reva Cilacap', items: 'Ayam Bakar, Es Kopi', total: 'Rp20.000', status: 'disiapkan', time: '45m ago' },
  { id: '#PSN-005', customer: 'Arya Pesilat', items: 'Ketoprak, Es Teh', total: 'Rp15.000', status: 'selesai', time: '3h ago' },
  { id: '#PSN-006', customer: 'Adid Sokaraja', items: 'Nasi Goreng, Es Jeruk', total: 'Rp17.000', status: 'dibatalkan', time: '1h ago' },
];

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || order.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'tertunda': return 'bg-amber-100 text-amber-700';
      case 'disiapkan': return 'bg-blue-100 text-blue-700';
      case 'selesai': return 'bg-green-100 text-green-700';
      case 'dibatalkan': return 'bg-red-100 text-red-700';
    }
  };

  return (
    <div className="p-6 lg:p-8 animate-in fade-in duration-500">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Manajemen Pesanan</h2>
        <p className="text-gray-500 text-sm">Kelola dan pantau pesanan pelanggan YumYum</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
        {/* Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Cari ID atau nama pelanggan..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 text-gray-600"
          >
            <option value="all">Semua Status</option>
            <option value="tertunda">Tertunda</option>
            <option value="disiapkan">Disiapkan</option>
            <option value="selesai">Selesai</option>
            <option value="dibatalkan">Dibatalkan</option>
          </select>
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-600 uppercase text-xs tracking-wider">
                <th className="py-4 px-4 font-semibold">ID Pesanan</th>
                <th className="py-4 px-4 font-semibold">Pelanggan</th>
                <th className="py-4 px-4 font-semibold">Item</th>
                <th className="py-4 px-4 font-semibold">Total</th>
                <th className="py-4 px-4 font-semibold">Status</th>
                <th className="py-4 px-4 font-semibold">Waktu</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-bold text-lime-600">{order.id}</td>
                    <td className="py-4 px-4 font-medium text-gray-700">{order.customer}</td>
                    <td className="py-4 px-4 text-gray-600 text-sm">{order.items}</td>
                    <td className="py-4 px-4 font-semibold">{order.total}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-gray-400 text-sm">{order.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-gray-400">
                    Tidak ada pesanan ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}