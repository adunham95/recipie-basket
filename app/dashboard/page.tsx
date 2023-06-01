import Container from '@/components/container';
import CategorySelector from '@/components/inputs/category-selector';
import SearchInput from '@/components/inputs/search-input';
import React from 'react';

const Dashboard = () => {
  return (
    <Container>
      <SearchInput className="mt-3" placeholderText="Search Recipes" />
      <CategorySelector
        options={[
          { id: '1', title: 'Seafood' },
          { id: '2', title: 'Breakfast' },
          { id: '3', title: 'Dessert' },
          { id: '4', title: 'Lunch' },
          { id: '5', title: 'Dinner' },
          { id: '6', title: 'Appetizer' },
          { id: '7', title: 'Salad' },
          { id: '8', title: 'Holiday' },
          { id: '9', title: 'Soup' },
          { id: '10', title: 'Snack' },
          { id: '11', title: 'Vegan' },
          { id: '12', title: 'Beef' },
          { id: '13', title: 'Poultry' },
          { id: '14', title: 'Pork' },
          { id: '15', title: 'Vegetarian' },
          { id: '16', title: 'Vegetables' },
        ]}
        checked={['1', '5', '10', '15', '14']}
      />
      {/* <section>
        <h1>Dashboard</h1>
      </section> */}
    </Container>
  );
};

export default Dashboard;
