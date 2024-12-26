import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const HomeLayout = () => {
    return (
        <div>
            <header className="">
                <Header></Header>
            </header>
           <Outlet></Outlet>

         <section className="mt-14">
         <Footer></Footer>
         </section>
        </div>
    );
};

export default HomeLayout;