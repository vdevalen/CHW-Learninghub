
import Header from "../components/header";
import BackG1 from '../img/homebkgrn3-removebg.png';
import BackG2 from '../img/backG2.png';
import "./home.css";
import SearchBar from "../components/searchBar";
import Card from "../components/cards1";
import imgC1 from "../img/1racard.svg";
import imgC2 from "../img/2card.svg";
import imgC3 from "../img/3card.svg";
import imgC4 from "../img/4cart.svg";
import imgC5 from "../img/6card.svg";
import imgC6 from "../img/7card.svg";
import Card2 from "../components/cards2";
import Printable from "../img/Ico_Printable.png";
import Digital from "../img/Ico_Digital4.png";
import Assessment from "../img/Ico_Assessment.png";
import Visual from "../img/Ico_Visual.png";
import Video from "../video/intro-chw-en.mp4"
import Card3 from "../components/cards3"
import ImgCard31 from "../img/card3-1.jpeg"
import ImgCard32 from "../img/card3-2.jpeg"
import ImgCard33 from "../img/card3-3.jpeg"
import ImgMain5  from "../img/main5img.jpeg"
import ImgMain7  from "../img/banner3.png"
import Footer from "../components/footer"
import RssReader from "../components/RssReader";

import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="Appp">
 
 
      
      <main id="main1" className="main1">

      <header className="App-header">
       <Header />
      </header>


      <h2 className="Tile1">
        Welcome to the <span className="bold-text">CHW Learning Hub</span>
      </h2>
        <p className="text1">We are a free, online resource people can gather information and access important tools.</p>
        <a href="#" className="learn-More">Learn more</a>
        <SearchBar />
      <div className='divContainerMain1'>
         
          <img 
            className='backMain'
            src={BackG1}
            alt="Logo"    
          />
        </div>
        
      

        <div id="CardContainer" className="CardContainer">
        <h2 className="title2">Browse by Topic</h2>
        <Link to="/chws-promoter">
            <Card
              title="CHW's/ promotores"   
              imageUrl={imgC1}
            />
          </Link>
          <Link to="/CommunityHealthEducation">
       <Card
        title="Community Health Education"   
        imageUrl={imgC2}
      />
      </Link>
      <Link to="/CoordinatorsAndSupervisors">
       <Card
        title="Coordinators and Supervisors"   
        imageUrl={imgC3}
      />
      </Link>
      <Link to="/AgenciesAndOrganizations">
       <Card
        title="Agencies and Organizations"   
        imageUrl={imgC4}
      />
      </Link>
       <Link to="/ChwIntegrationHealthcare">
       <Card
        title="CHW integration into Healthcare"   
        imageUrl={imgC5}
      />
      </Link>
      <Card
        title="Engagement and Advocacy"   
        imageUrl={imgC6}
      />
      </div>
      <div id="main2" className="main2">
        <h2 className="titleMain2"> Filter by Resource Type</h2>
        <p className="textMain2"> You can preview some of our content by applying the following filters, Creaåte and account all of our material on personal development, capacity building, and as and ald to use share when working whith their community.</p>
        <div id="CardContainer2" className="CardContainer2">
        <Card2
        title="Printable"
        text="Resources you can print"   
        imageUrl={Printable}
      />
       <Card2
        title="Graphics"   
        imageUrl={Visual}
        text="A great bank of images" 
      />
       <Card2
        title="Assessmennts"   
        imageUrl={Assessment}
        text="Test your landing pages " 
      />
       <Card2
        title="Digital"   
        imageUrl={Digital}
        text="Ineract with our plataform "
      />


      </div>
      <div id="main3"  className="main3">
          <video className="video" autoPlay loop muted>
          <source src={Video} type="video/mp4" />
 
  
          </video>
      </div>  
      <div  id="main4"  className="main4">
        
        <h2 className="titleMission">Mission</h2>
        <p className="textMission">It is our mission to provide relevant social, health-related, and empowering resources to CHWs/Ps, community health advocates, and community members worldwide so that, hand in-hand, we may lift each other up and improve our quality of life.</p>
        <h3 className="subtitleMission">At the Hub, we aim to:</h3>
        <div className="Card3-Continer">
        <Card3
        title="Graphics"   
        imageUrl={ImgCard31}
        text="Our team is composed of CHWs/Ps who have many years of lived experiences as well as formal and informal training. Our main goal is to share best practices, relevant data and information, and useful tools and techniques to help you serve your community." 
      />
      
       <Card3
        title="Assessmennts"   
        imageUrl={ImgCard32}
        text="Together, we understand the challenges and rewards of working for and alongside the community, and share in your passion for empowering underserved communities. Health care agencies, donors, and the community at large- can easily search for the information they need. We've created several tools to support you on your journey." 
      />
       <Card3
        title="Digital"   
        imageUrl={ImgCard33}
        text="We believe sharing knowledge is power. Our aim is to share information, activities, guides, checklists, and many other types of tools to promote cultural humility and create equity for all. Far beyond providing health care services, CHWs/Ps are advocates for change and share a commitment to the people they serve. "
      />
    </div>
      </div>
      </div>
    
     

      <div id="main6"  className="main6"> 
       <div id="main5"  className="main5">
        <div className="createFreeCont22">
          <h2 className="crea">Create free account</h2>
          <p className="createfreeP">By creating a free account, you will have access to learning materials, print and digital resources, games, and a forum where you can communicate and share stories with other CHWs. We also provide you with a space to build your CHW portfolio where you can keep track of your training hours/certificates. Create an account today to discover even more.</p>
          <button className="createfreeButton">Create account</button>
          <a className="acountAlready" href="#"> Already a member?</a>
          <a className="loGin" href="#">Log In</a>
        </div>
          <img className="ImgMain5" src={ImgMain5} href="manimg" />       
      </div> 
    <div className="contenedoresCard4">
      <div className="card4-container">
        <RssReader />
      </div>
      <div className="card4-container2">
        <RssReader />
      </div>
      </div>

      <div className="banner2">
      <div className="textBotonsBanner2">
      <img  className="ImgMain7" src={ImgMain7} href="manimg" />
      <div className="inputContainer">
      <h2 className="textBanner">Be the first to learn about the latest tools and information featured on the Hub</h2>
      <input className="inputBanner" type="text" placeholder="Enter email addres" />
      <button className="buttonBanner2">Suscribe now</button>
      </div>
      </div>      
      </div>

       <div className='divContainerMain7'>          
           <img 
             className='backMain2'
             src={BackG2}
             alt="Logo2"    
           />
         </div>   
            <div className="footer" >
            <Footer />
        </div>  
       </div>
       </main>
      </div>
    
  
  );
}

export default Home;
