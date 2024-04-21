import img from '/lake.avif'
import location from '/location-icon.svg'
function Card(props) {
    return (
        <div className='card'>
            <div className="card--right">
                <img src={props.imageUrl} alt="" className='card--image' />
            </div>
            <div className="card--left">
                <div className="card--location">
                    <img src={location} alt="" />
                    <span><h4>{props.location}</h4></span>
                    <span><a href={props.googleMapsUrl}>View on Google Maps</a></span>
                </div>
                <h1 className='card--name'>{props.title}</h1>
                <h4 className='card--date'>{props.startDate} - {props.endDate}</h4>
                <p className='card--data'>{props.description}</p>
            </div>
        </div>
    )
}

export default Card