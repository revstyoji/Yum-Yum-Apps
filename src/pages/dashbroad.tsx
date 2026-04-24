import { useLocation } from "react-router-dom";
import { 
  SidebarProvider, 
  SidebarInset, 
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shared/sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname.split("/").pop(); 
    if (!path || path === "admin") return "Dashboard Overview";
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-slate-50/30">
        <AppSidebar />

        <SidebarInset className="flex flex-col w-full overflow-hidden">

          <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white/80 backdrop-blur-md px-6 sticky top-0 z-20 shadow-sm">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-slate-100 border p-2 rounded-xl transition-all active:scale-95 shadow-sm" />
              
              <div className="h-6 w-px bg-slate-200 hidden sm:block" />
              
  
              <nav className="flex items-center gap-2 text-sm font-medium">
                <span className="text-slate-400">Admin</span>
                <span className="text-slate-300">/</span>
                <h1 className="font-bold text-slate-800 tracking-tight animate-in slide-in-from-left-2 duration-300">
                  {getPageTitle()}
                </h1>
              </nav>
            </div>

            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Administrator</p>
                <p className="text-xs font-bold text-slate-700">Admin</p>
              </div>
              <div className="h-9 w-9 rounded-2xl bg-linear-to-tr from-lime-300 to-lime-600 border-2 border-white shadow-md group-hover:rotate-6 transition-transform duration-300" />
            </div>
          </header> 

          <main className="flex-1 overflow-y-auto p-0 relative">
             <div key={location.pathname} className="animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out h-full">
                <Outlet />
             </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}