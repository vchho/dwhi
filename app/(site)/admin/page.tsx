import { Shell } from "@/components/shell"
import { Header } from "@/components/ui/header";

const Admin = () => {
  return (
    <Shell layout="dashboard" className="px-1">
      <Header title="Admin" description={"Admin details"} />
      <h1>Admin page</h1>
    </Shell>
  )
}

export default Admin;
