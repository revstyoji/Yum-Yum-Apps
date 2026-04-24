import { Mail, Phone } from 'lucide-react';

interface Customer {
  id: string;
  name: string;
  email: string;
  orders: number;
  totalSpent: string;
  lastOrder: string;
}

const mockCustomers: Customer[] = [
  { id: '1', name: 'Fadil Russian', email: 'fadil@email.com', orders: 24, totalSpent: 'Rp487.000', lastOrder: '2 days ago' },
  { id: '2', name: 'Jojo Nusantara', email: 'jojo@email.com', orders: 18, totalSpent: 'Rp356.000', lastOrder: '1 day ago' },
  { id: '3', name: 'Pajri Cirebon', email: 'pajri@email.com', orders: 32, totalSpent: 'Rp672.000', lastOrder: '5 hours ago' },
  { id: '4', name: 'Reva Cilacap', email: 'reva@email.com', orders: 15, totalSpent: 'Rp289.000', lastOrder: '3 days ago' },
  { id: '5', name: 'Arya Pesilat', email: 'arya@email.com', orders: 41, totalSpent: 'Rp892.000', lastOrder: '1 day ago' },
  { id: '6', name: 'Adid Sokaraja', email: 'adid@email.com', orders: 9, totalSpent: 'Rp178.000', lastOrder: '1 week ago' },
];

export function Customers() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Pelanggan</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCustomers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-lime-600 to-lime-300 rounded-full flex items-center justify-center text-white text-xl font-semibold">
                {customer.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-semibold text-lg">{customer.name}</h3>
                <p className="text-gray-600 text-sm">{customer.lastOrder}</p>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16} />
                <span>{customer.email}</span>
              </div>
            </div>

            <div className="border-t pt-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 text-sm">Total Pesanan</p>
                <p className="font-semibold text-lg">{customer.orders}</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm">Total Pengeluaran</p>
                <p className="font-semibold text-lg text-green-600">{customer.totalSpent}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
