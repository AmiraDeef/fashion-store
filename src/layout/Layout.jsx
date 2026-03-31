import Footer from '../shared/Footer'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../shared/Navbar'

const Layout = () => {
    return (
       <>
         <Navbar/>
        
          <div style={{ marginTop: "100px" }}>
           <Outlet />
         </div>

       <Footer/>
       </>
    )
}

export { Layout }
