// create a react component
import React from 'react';
import Header from "./Header";
import webData from "../webData";
import Mission from "./Mission";
import NewPastPortfolio from "./NewPastPortfolio";
import Blogs from "./Blogs";
import Photos from "./Photos";
import Timeline from "./Timeline";
import Cooperation from "./Cooperation";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
function HomePage() {
    return (
        <div className="App">
            <Header webData={webData}/>
            <Mission webData={webData}/>
            {/* <Portfolio webData={webData}/>
        <PastPortfolio webData={webData}/> */}
            {/*<NewPortfolio webData={webData}/>*/}
            <NewPastPortfolio webData={webData}/>
            <Blogs/>
            <Photos />
            {/*<AdvisorPhotos />*/}
            {/*<Alumni />*/}
            <Timeline />
            <Cooperation />
            <Testimonials webData={webData}/>
            <ContactUs webData={webData}/>
            <Footer webData={webData}/>
        </div>
    );
}
export default HomePage;