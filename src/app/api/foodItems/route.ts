import Restaurant from "@/app/restaurant/[name]/page";
import { describe } from "node:test";

const foodItems = [
  {
    id: 0,
    name: "Pizza",
    options: [
      {
      restaurant: "Pizza Shopee",
      description: "Loaded with fresh bell peppers, onions, mushrooms, olives, and tomatoes on a cheesy, saucy crust. A perfect pick for veggie lovers!",
      img: "https://www.orchidsandsweettea.com/wp-content/uploads/2019/05/Veggie-Pizza-2-of-5-e1691215701129.jpg",
      unitPrice: 180,
      totalPrice: 180,
      quantity: 1,
    },
    {
      restaurant: "KD cafe",
      description: "Tender grilled chicken, melted mozzarella, and tangy tomato sauce topped with onions and herbs on a crispy crust. A savory favorite for meat lovers!",
      img: "https://bluebowlrecipes.com/wp-content/uploads/2019/05/barbecue-chicken-pizza-0917.jpg",
      unitPrice: 180,
      totalPrice: 180,
      quantity: 1,
    },
    {
      restaurant: "Hungry crust pizza",
      description: "A classic favorite with rich tomato sauce and a generous layer of golden, melted mozzarella cheese on a crispy crust.",
      img: "https://thestayathomechef.com/wp-content/uploads/2023/07/Easy-Cheese-Pizza_Square-1.jpg",
      unitPrice: 180,
      totalPrice: 180,
      quantity: 1,
    }
  ]
  },
  {
    id: 1,
    name: "Parathe",
    options: [
      {
        restaurant: "Dhaba bollywood",
        description: "Flaky whole wheat flatbreads stuffed with a spiced mashed potato filling, cooked golden with ghee. Served hot and perfect with curd or pickle!",
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/08/aloo-paratha-recipe.jpg",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1,
      },
      {
        restaurant: "Amrik Sukhdev",
        description: "Crispy, golden flatbreads stuffed with a flavorful mix of grated cauliflower, herbs, and spices. Best enjoyed with curd or a dollop of butter!",
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/01/gobi-paratha-cauliflower-paratha-recipe.jpg",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1,
      }
    ]
  },
  {
    id: 2,
    name: "Dosa",
    options: [
      {
        restaurant: "Madras Dosa Corner",
        description: "A golden, crispy dosa rolled around a spiced potato filling, served hot with coconut chutney and tangy sambar. A South Indian classic loved by all!",
        img: "https://i0.wp.com/binjalsvegkitchen.com/wp-content/uploads/2015/12/Masala-Dosa-L1.jpg?resize=600%2C900&ssl=1",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1,
      },
      {
        restaurant: "Anna Dosa",
        description: "A crispy dosa stuffed with a flavorful mix of spiced paneer, onions, and herbs. Served with chutney and sambar for a tasty twist on a classic!",
        img: "https://nestle.fitterfly.in/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBakVpIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--86d490faa95a5e498000eafbd9ce3f59cc55e86a/18015-Paneer_Bhurji_Dosa.webp",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1,
      },
      {
        restaurant: "Rasoi Dhabha",
        description: "Crisp and golden dosa generously layered with melting butter, giving it a rich and irresistible flavor. A simple delight served with chutney and sambar!",
        img: "https://i0.wp.com/www.nandanmsd.com/wp-content/uploads/2020/08/Butter-Paper-Masala-Dosa-1.jpg?fit=1920%2C1080&ssl=1",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1,
      },
    ]
  },
  {
    id: 3,
    name: "Daal Bati",
    options: [{
      restaurant: "Chokhi Dhani Sonipat",
      description: "A traditional Rajasthani delicacy featuring crisp, golden wheat balls (bati) served with rich, spiced mixed lentils (dal) and a generous drizzle of ghee. Hearty, flavorful, and deeply satisfying!",
      img: "https://kannanskitchen.com/wp-content/uploads/2021/07/DSC_8173-5.jpg",
      unitPrice: 180,
      totalPrice: 180,
      quantity: 1,
    }]
  },
  {
    id: 4,
    name: "Sandwitches",
    options: [
      {
        restaurant: "Haveli",
        description: "A wholesome mix of fresh veggies like cucumber, tomato, onion, and lettuce layered between soft bread slices, spread with butter or chutney. Light, crunchy, and perfect for any time of day!",
        img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2024/05/veg-cheese-sandwich-recipe.jpg",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1
      },
      {
        restaurant: "Amrik Sukhdev",
        description: "Toasted bread filled with a creamy, cheesy corn mixture, seasoned with mild spices and herbs. Gooey, flavorful, and utterly delicious with every bite!",
        img: "https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1,
      },
      {
        restaurant: "Neelkanth Star Murthal",
        description: "A warm, pressed Italian sandwich with crusty bread filled with savory ingredients like grilled meats, cheeses, and fresh veggies. Crispy on the outside, melty and flavorful inside — perfect for a satisfying meal!",
        img: "https://www.southernliving.com/thmb/UW4kKKL-_M3WgP7pkL6Pb6lwcgM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-1-49227336bc074513aaf8fdbde440eafe.jpg",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1,
      }
    ]
  },
  {
    id: 5,
    name: "Indian Thaali",
    options: [
      {
        restaurant: "Dhaba Bollywood",
        description: "A wholesome platter offering a variety of traditional Indian dishes — from flavorful dals, vegetable curries, fragrant rice, and fresh rotis to tangy pickles, cooling raita, and sweet desserts. A perfect meal that brings together a symphony of tastes and textures in one satisfying spread.",
        img: "https://images.squarespace-cdn.com/content/v1/5f2fa039103c7a08856032c1/1653757576778-GOCQPNGCFA6C6LL2QRI6/public.jpeg",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1,
      },
      {
        restaurant: "Rasoi Dhaba",
        description: "Experience the royal flavors of Rajasthan with a hearty platter featuring dal bati churma, spicy gatte ki sabzi, ker sangri, bajra roti, tangy chutneys, and sweet delights like malpua. A rustic, vibrant feast that showcases the rich culinary heritage of the desert state.",
        img: "https://images.squarespace-cdn.com/content/v1/5f2fa039103c7a08856032c1/1617410038432-RPNZUM15PLGK5X1PFFHB/20210321_161914.jpg",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1,
      },
      {
        restaurant: "Haveli",
        description: "A delightful spread featuring steamed rice, tangy sambar, a variety of vegetable curries, coconut chutneys, crispy papad, and curd. Finished with a sweet treat like payasam, this thali offers a perfect balance of flavors from the heart of South India.",
        img: "https://imgmediagumlet.lbb.in/media/2024/12/6763c390ad5b133601d57eed_1734591376530.jpg",
        unitPrice: 180,
        totalPrice: 180,
        quantity: 1,
      },
    ]
  }

];

export default foodItems;