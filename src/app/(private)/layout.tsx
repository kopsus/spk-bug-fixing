import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { DialogDelete } from "@/components/dialog/dialog-delete";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar collapsible="icon" />
      <SidebarInset>{children}</SidebarInset>
      <DialogDelete />
    </SidebarProvider>
  );
}
