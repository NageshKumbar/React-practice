import './ProductCard.css'

const ProductCard = ({product}) => {
    return (
        <div className="card product_card">
            <img src={product.img_src} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <a href="#" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
    )
}

export default ProductCard;