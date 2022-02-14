import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";
import Booking from "./Booking";
import ProductsContainer from "./../containers/ProductsContainer";

export default function Home({ user }) {
  
  if (user.user) {
    console.log('thongtin_Taikhoandadangnhap1', user);
    return (
      <>
        <Header user={user} />
        <Booking/>
        <ProductsContainer/>
        <Footer/>
      </>

    );

  } else {
    return (
      <Login user={user} />
    );
  }

}
