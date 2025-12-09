import Carousel from "../../components/Carousel/Carousel";

import './HomePage.css'

function HomePage() {
    return ( 
    <>
        <div className="container">
            <div className="row home_banner">
                <div className="col bg-primary">
                    <Carousel />
                </div>

            </div>

        </div>
    </>
    )
}

export default HomePage;