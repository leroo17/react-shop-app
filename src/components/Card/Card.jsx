import './Card.css'
export const Card = ({title, price, address, date, image}) => {

    return (
        <>
            <a href="product.html" className="content-main__list-item">
                <div className="content-main__list-item--img">
                    <img src={image} />
                </div>
                <h5 className="content-main__list-item--title">
                    {title}
                </h5>
                <strong className="content-main__list-item--price">{price}</strong>
                <div className="content-main__list-item--desc-box">
                    <span className="content-main__list-item--desc">{address}</span>
                    <span className="content-main__list-item--desc">{date}</span>
                </div>
            </a>
        </>
    )
}
