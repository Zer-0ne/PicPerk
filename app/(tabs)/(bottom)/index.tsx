import CardContainer from '@/components/CardContainer';
import React from 'react';

export interface Item {
  farm: string;
  id: string;
  owner: string;
  title: string;
  server: string;
  secret: string;
}

const HomeScreen = () => {

  return (
    <CardContainer
      Action={'all-image'}
    />
  );
};


export default HomeScreen;