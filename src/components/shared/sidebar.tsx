import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton 
} from "@/components/ui/sidebar"
import { LayoutDashboard, ShoppingBag, Utensils, Users } from "lucide-react"
import logo from "@/assets/yumyumlogo.png"

export function AppSidebar() {
  // 1. Ambil path sekarang (Otomatis deteksi lokasi halaman)
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : "/"; 

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, url: "/admin/home" },
    { name: "Pesanan", icon: ShoppingBag, url: "/orders" },
    { name: "Menu", icon: Utensils, url: "/admin/menu" },
    { name: "Pelanggan", icon: Users, url: "/customers" },
  ]

  return (
    <Sidebar className="border-r border-slate-200 [&_[data-sidebar=sidebar]]:!bg-white" >
      <SidebarHeader className="p-6 flex flex-row items-center gap-3">
        <img 
          src={logo} 
          alt="Yum Yums Logo" 
          className="h-20 w-auto object-contain" 
        /> 
        <div className="flex flex-col">
          <h2 className="text-xl font-extrabold tracking-tight text-slate-800 leading-none">
            Yum<span className="text-red-300">Yums</span>
          </h2>
          <p className="text-[10px] text-slate-400 font-medium tracking-widest mt-1">MANAGEMENT</p>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4">
        <SidebarMenu className="space-y-1">
          {menuItems.map((item) => {

            const isActive = currentPath === item.url; 

            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton 
                  asChild 
                  isActive={isActive} 
                  className={`py-7 px-4 transition-all duration-300 rounded-xl ${
                    isActive 
                      ? "!bg-slate-600  !text-white font-bold shadow-sm" 
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-800" 
                  }`}
                >
                  <a href={item.url} className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 transition-colors ${isActive ? "text-white" : "text-slate-400"}`} />
                    <span className="text-[15px]">{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}