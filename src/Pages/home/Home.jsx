import Featured from '../../components/Feature/Featured';
import FeaturedProperties from '../../components/FeaturedProperties/FeaturedProperties';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import MailList from '../../components/MailList/MailList';
import Navbar from '../../components/Navbar/Navbar';
import PropertyList from '../../components/PropertyList/PropertyList';
import "./home.css";

const home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured/>
        <h1 className='homeTitle'>Browse by property type</h1>
        <PropertyList/>
        <h1 className='homeTitle'>Homes Guest Love</h1>
        <FeaturedProperties/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default home;
