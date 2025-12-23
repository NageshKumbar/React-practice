import Carousel from "../../components/Carousel/Carousel";
import ProductCard from "../../components/ProductCard/ProductCard";

import { carousel_images } from "../../data/carousel_images";
import { products_lists } from "../../data/products_lists";

import './HomePage.css'

function HomePage() {
    return (
        <>
            <div className="container">
                <div className="row home_banner">
                    <div className="col">
                        <Carousel images={carousel_images} />
                    </div>
                    <div className="col bg-secondary">

                    </div>
                </div>
                <div className="productContainer p-3 d-grid gap-2 ">
                    {/* <ul>
                    {
                        products_lists.map((product, index) => (
                            <li>{product.title} - Rs.{product.price}</li  >
                        ))
                    }
                    </ul> */}
                    {
                        products_lists.map((product, index) => (
                            <ProductCard product = {product} key = {product.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HomePage;