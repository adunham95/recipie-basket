import Container from '@/components/container';
import FilterHeader from '@/components/filterHeader/';
import RecipeCardSmall from '@/components/recipe-card/recipe-card-small';
import React from 'react';

const Dashboard = () => {
  return (
    <>
      <FilterHeader />

      <Container>
        <section className="grid gap-x-6 gap-y-10 grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <RecipeCardSmall
            imgSrc="/images/sushi_placeholder.jpg"
            imgAlt="sushi"
            title="Sushi"
            category="Dinner"
            tags={['Sushi', 'Quick Meal']}
          />
          <RecipeCardSmall
            imgSrc="/images/pancake_placeholder.jpg"
            imgAlt="pancake"
            title="Pancakes"
            category="Breakfast"
          />
          <RecipeCardSmall
            imgSrc="/images/seafood_placeholder.jpg"
            imgAlt="seafood"
            title="Seafood"
            category="Seafood"
          />
          <RecipeCardSmall
            imgSrc="/images/charcuterieboard_placeholder.jpg"
            imgAlt="charcuterie"
            title="Charcuterie Board"
            category="Dinner"
          />
          <RecipeCardSmall
            imgSrc="/images/sushi_placeholder.jpg"
            imgAlt="sushi"
            title="Sushi"
            category="Dinner"
          />
          <RecipeCardSmall
            imgSrc="/images/pancake_placeholder.jpg"
            imgAlt="pancake"
            title="Pancakes"
            category="Breakfast"
          />
          <RecipeCardSmall
            imgSrc="/images/seafood_placeholder.jpg"
            imgAlt="seafood"
            title="Seafood"
            category="Seafood"
          />
          <RecipeCardSmall
            imgSrc="/images/charcuterieboard_placeholder.jpg"
            imgAlt="charcuterie"
            title="Charcuterie Board"
            category="Dinner"
          />
        </section>
      </Container>
    </>
  );
};

export default Dashboard;
