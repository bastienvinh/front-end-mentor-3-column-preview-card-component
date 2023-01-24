import "./Card.scss"

const Card = ({ title, description, icon, bgColor }) => {
  return (
    // 275 x 450
    <div className="card" data-color={bgColor}>
      <img className="image" src={icon} alt="icon" />
      <h3>{title}</h3>
      <p className="description">{description}</p>
      <a href="#">Learn More</a>
    </div>
  )
}

export default Card