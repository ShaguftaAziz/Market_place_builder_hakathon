import React from "react";
import HomePage from "@/components/HomePages/HomeHero";
import FoodCategory from "@/components/HomePages/FoodCategory";
import OurChefs from "@/components/HomePages/OurChefs";
import HomeMenu from "@/components/HomePages/HomeMenu";
import Aboutus from "@/components/HomePages/AboutUs";
import BlogPost from "@/components/HomePages/BlogPosts";
//import TestimonialsSection from '@/components/TestimonialsSection';
//import { client } from '@/sanity/lib/client'
//import Review from "@/components/Review";

const Home = () => {
  return (
    <div>
      {/* Header component for the top section of the page */}
      <HomePage />

      {/* About component to display about us section */}
      <Aboutus />

      {/* Categories component to display various categories */}
      <FoodCategory />

      {/* HomeMenu component to display menu items */}
      <HomeMenu />

      {/* Our Chefs component to display the chefs */}
      <OurChefs />

     // {/* Testimonial component to display testimonial section */}
    //  <TestimonialsSection />

      {/* Blog post component to display blog posts */}
      <BlogPost />
    </div>
  );
};

export default Home;
