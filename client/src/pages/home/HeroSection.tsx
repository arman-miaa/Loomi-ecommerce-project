import card1 from '../../assets/card-1.png';
// import card2 from '../../assets/card-2.png';
import card3 from '../../assets/card-3.png';
import { TCard } from '../../types/Card';


const cards:TCard[] = [
  {
    id: 1,
    image: card1,
    trend: "2024 Trend",
    title: "Womans Shirt",
  },
  {
    id: 2,
    image: card3,
    trend: "2024 Trend",
    title: "Womans Dresses",
  },
  {
    id: 3,
    image: card1,
    trend: "2024 Trend",
    title: "Womans Casual",
  },
];

const HeroSection = () => {
  return (
      <div className='section__container hero__container'>
          {
              cards.map((card) => (
                  <div key={card.id} className='hero__card'>
                      <img src={card.image} alt="" />
                      <div className='hero__content'>
                          <p>{card.trend}</p>
                          <h4>{card.title}</h4>
                          <a href="#">Discover More</a>
                      </div>
                  </div>
              ))
          }
    </div>
  )
}

export default HeroSection