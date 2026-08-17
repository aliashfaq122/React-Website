import React from 'react'
import logo from './assets/logoImg.png'
import heroImg from './assets/hero-banner.jpg'
import { Card } from './components/card'
import bottomLogo from './assets/logo-bottom.png'
import { cartAdd } from './components/cartAdd'

const App = () => {
  let foods = [{

    title: "Halwa Puri",
    category: "breakfast",
    price: 250,
    description: "Fresh halwa puri with chana.",
    image: "https://images.deliveryhero.io/image/fd-pk/LH/jnq8-listing.jpg",
  },

  {
    title: "Chai",
    category: "breakfast",
    price: 80,
    description: "Hot and Delecious Chai",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVCgHwYjqKwjIoJey_7f6Oc6PfDeW2haWmO51iv4SOiQ&s=10",
  },

  {
    title: "Paratha",
    category: "breakfast",
    price: 60,
    description: "Crispy and Hot paratha",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTay6rFPmmca3aE8V4nt2hINeVnf7eVacCkL-3WxM1mUA&s=10",
  },
  {
    title: "Omelette",
    category: "breakfast",
    price: 150,
    description: "Fluffy omelette served with bread.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmurjxo2umEkcvBYpOsYFM81iM0GAfGVUmwQ0hxWggQ&s=10",
  },
  {
    title: "Aloo Paratha",
    category: "breakfast",
    price: 220,
    description: "Stuffed aloo paratha with yogurt.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDNglkDMgFuUR98kd4vbb3xTNlLGVJIRWYq7lr6SkeLA&s=10https://upload.wikimedia.org/wikipedia/commons/5/56/Aloo_Paratha.jpg",
  },
  {
    title: "Nihari",
    category: "breakfast",
    price: 350,
    description: "Traditional beef nihari with naan.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdtcUcPAqsEaZh9Um405685HNg1jAPT-A1EqoWKdZCg&s=10",
  },

  // ------------------ Lunch ------------------
  {
    title: "Chicken Biryani",
    category: "lunch",
    price: 350,
    description: "Spicy Karachi style chicken biryani.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGb4GlhonJ7KfUeJ_xEd2nEx9BJwmtQVeXysB-9weBg&s=10",
  },
  {
    title: "Beef Biryani",
    category: "lunch",
    price: 420,
    description: "Delicious beef biryani.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJOieY3JlfKN-Bv3h4axBcpT-GGHCGpEsV8EWcGzqmQ&s=10",
  },
  {
    title: "Chicken Korma",
    category: "lunch",
    price: 380,
    description: "Creamy chicken korma.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSk5m-CaqB2bQN67SRhAdKikdFLq4uKZZtfv2pd06DDQ&s=10",
  },
  {
    title: "Chicken Karahi",
    category: "lunch",
    price: 450,
    description: "Traditional chicken karahi.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNPUzu0fh68LtO0TxfM72_7AcE52Ea8Xd81b-eQURXHg&s=10",
  },
  {
    title: "Seekh Kebab",
    category: "lunch",
    price: 300,
    description: "Juicy seekh kebabs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFBCzrbG8Z1YxndebR1_ti4jiVoaFXMzda79PytNhBbQ&s=10",
  },

  // ------------------ Beverages ------------------
  {
    title: "Pakola",
    category: "beverages",
    price: 100,
    description: "Refreshing Pakistani soft drink.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs-OBcfMvZFhunHRsSwEzmY_yigDq0kzyb-P5K3UO1Bg&s=10",
  },
  {
    title: "Pepsi",
    category: "beverages",
    price: 110,
    description: "Refreshing soft drink.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyFFAolqt6QJLwsCdhvIudktIqlN6N703a0gOFlKXrcg&s=10",
  },
  {
    title: "7 Up",
    category: "beverages",
    price: 110,
    description: "Refreshing soft drink.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HguVtpTRDpOr38zcYEekm9ItvqvNXlzoXvvhshBhBg&s=10",
  },
  {
    title: "Lassi",
    category: "beverages",
    price: 150,
    description: "Sweet chilled lassi.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq_dn2ELNq_Pk1h-RtDtV9IesfGl2u7ZZZ-vNzoV1nmw&s=10",
  },
  {
    title: "Mango Shake",
    category: "beverages",
    price: 220,
    description: "Fresh mango milkshake.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywVYPwEkWAlOtILf3TYlALwh1hasX9SdCyQ-oRN081Q&s=10",
  },
  {
    title: "Cold Coffee",
    category: "beverages",
    price: 250,
    description: "Creamy iced coffee.",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600",
  },
  {
    title: "Fresh Orange Juice",
    category: "beverages",
    price: 150,
    description: "Freshly squeezed orange juice.",
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg",
  },
  ];




  return (
    <div >
      <div className="navbar flex justify-between">
        <div className="leftSide">
          <div className="logo flex justify-start ">
            <img src={logo} alt="" width={70} />
          </div>
        </div>
        <div className="middleSide flex">
          <nav className='flex  gap-8 '>
            <a href="#">Home</a>
            <a href="#">Products</a>
            <a href="#">Contact</a>
            <a href="#">Login</a>
          </nav>



        </div>
        <div className="rightSide ">
          <input type="text" placeholder='Search For Your Favorite Food ' />
          <i className="fa-solid fa-magnifying-glass"></i>
          
        </div>

      </div>
      <section>
        <div className="heroSec">
          <div className="Banner">
            <img src={heroImg} alt="" />
          </div>

        </div>
      </section>

      <div className="cardSec">
        <div className="productContainer flex justify-center gap-7">
          {foods.map((item, idx) =>
          (
            <Card key={idx} item={item}></Card>
          )


          )}
        </div>
      </div>

      <div className="footerSec flex justify-evenly">
        <div className="leftBar">
          <div className="logoBottom">
            <img src={bottomLogo} width={100} alt="" />
          </div>
          <div className="footerText">
            <p className='font-bold '>Our SocialMedia</p>
          </div>
          <div className="socialMedia flex justify-evenly">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-whatsapp"></i>

          </div>
        </div>
        <div className="middleBar">
          <div className="companyPolicies">
            <h1>About Us</h1>
            <p>Career</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="rightBar">
          <div className="companyDetails">
            <h1>Contact Us</h1>
            <p><i className="fa-solid fa-phone"></i> +92 330-8786-747-7</p>
            <p><i className="fa-regular fa-envelope"></i> muhammedaliashfaq@gmail.com</p>
            <p><i className="fa-solid fa-location-dot"></i> Plot 12-C, Lane 5,<br /> Shahrah-e-Iran Clifton, Block 4, Karachi, 75600</p>
          </div>
        </div>
      </div>

    </div>
  )

}

export default App
