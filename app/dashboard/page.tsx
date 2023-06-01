import Container from '@/components/container';
import FilterHeader from '@/components/filterHeader/';
import RecipeCardSmall from '@/components/recipe-card/recipe-card-small';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <FilterHeader />

      <Container>
        <section className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <RecipeCardSmall
            imgSrc="/images/sushi_placeholder.jpg"
            imgAlt="sushi"
          />
          <RecipeCardSmall
            imgSrc="/images/pancake_placeholder.jpg"
            imgAlt="pancake"
          />
          <RecipeCardSmall
            imgSrc="/images/seafood_placeholder.jpg"
            imgAlt="seafood"
          />
          <RecipeCardSmall
            imgSrc="/images/charcuterieboard_placeholder.jpg"
            imgAlt="charcuterie"
          />
        </section>
      </Container>
    </>
  );
};

export default Dashboard;
