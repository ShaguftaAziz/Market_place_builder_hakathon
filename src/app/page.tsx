import React from 'react'
import HomePage from '@/components/HomePages/HomeHero'
import FoodCategory from '@/components/HomePages/FoodCategory'
import OurChefs from '@/components/HomePages/OurChefs'
import { client } from '@/sanity/lib/client'
// import ChefsHero from '@/components/HomePages/ChefsHero'

const getproducts = async ()=> {
  const products = await client.fetch(

  `*[_type=="product"][0..4]{
  _id,
  name,
  description,
  quantity,
    productName,
    price,
    image,
    color,
    category, slug ,
    "Image_url":image.asset->url,
}
    `
)
return products

}

export default async function Home() {
  const products = await getproducts()
}



 // return ( 
    <div>
      <HomePage />
      <FoodCategory />
      <OurChefs />
     {/* <WhyChooseUs /> */}
      {/* <ChefGrid /> */}

    </div>

 // )
//}

//export default Home
