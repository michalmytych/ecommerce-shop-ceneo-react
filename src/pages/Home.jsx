import React from "react";
// dane
import { data } from "../data";
// Komponenty
import Header from "../components/organisms/Header";
import Categories from "../components/organisms/Categories";
import Banner from "../components/atoms/Banner";
import Slider from "../components/organisms/Slider";
import Products from "../components/organisms/Products";
import SmallBannersContainer from "../components/molecules/SmallBannersContainer";
import Billboard from "../components/molecules/Billboard";
import CategoriesCard from "../components/molecules/CategoriesCard";
import Content from "../components/molecules/Content";
import Layout from "../components/molecules/Layout";

export default function Home() {
  return (
    // Background
    <div className="bg-gray-100">
      <Header />
      {/* Pojemnik zawartości */}
      <Layout>
        {/* Pojemnik na kategorie */}
        <CategoriesCard>
          <Categories />
        </CategoriesCard>
        {/* Pojemnik na kategorie -> Koniec */}
        {/* Pojemnik na slider i banery oraz produkty */}
        <Content>
          {/* Pojemnik na slider i banery */}
          <Billboard>
            <Slider />
            {/* Pojemnik na 2 mniejsze banery */}
            <SmallBannersContainer>
              <Banner src={data.banners[1].src} />
              <Banner src={data.banners[2].src} />
            </SmallBannersContainer>
            {/* Pojemnik na 2 mniejsze banery -> Koniec */}
          </Billboard>
          {/* Pojemnik na slider i banery -> Koniec */}
          <Products />
        </Content>
        {/* Pojemnik na slider i banery oraz produkty -> Koniec */}
        </Layout>
      {/* Pojemnik zawartości -> Koniec */}
    </div>
    // Background -> Koniec
  );
}
