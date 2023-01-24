import Card from "./Card"

import IconLuxury from "../images/icon-luxury.svg";
import IconSedans from "../images/icon-sedans.svg";
import IconSuvs from "../images/icon-suvs.svg";

import "./Cards.scss";

const Cards = () => {
  return (
    <div className="cards">
      <Card title="SEDANS" description="Choose a sedans for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip." icon={IconSedans} bgColor="orange" />
      <Card title="SUVS" description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next familv vacation and off-road adventures." icon={IconSuvs} bgColor="cyan" />
      <Card title="LUXURY" description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style." icon={IconLuxury} bgColor="dark-cyan" />
    </div>
  )
}

export default Cards