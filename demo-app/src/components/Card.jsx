import img from '/lake.avif'
import location from '/location-icon.svg'
function Card() {
    return (
        <div className='card'>
            <div className="card--right">
                <img src={img} alt="" className='card--image' />
            </div>
            <div className="card--left">
                <div className="card--location">
                    <img src={location} alt="" />
                    <span><h4>JAPAN</h4></span>
                    <span><a href="">View on Google Maps</a></span>
                </div>
                <h1 className='card--name'>Mount Fuji</h1>
                <h4 className='card--date'>12 Jan, 2021 - 24 Jan, 2021</h4>
                <p className='card--data'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}

export default Card