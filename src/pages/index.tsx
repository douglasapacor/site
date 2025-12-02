import Home from "@/views/inicio"
import mainLayout from "@/views/layout/mainLayout"

function Page() {
  return (
    <>
      <Home />
    </>
  )
}

Page.layout = mainLayout
export default Page
