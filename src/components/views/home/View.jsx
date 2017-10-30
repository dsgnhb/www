import React from 'react';
import Header from './sections/Header';
import Intro from './sections/Intro';
import Features from './sections/Features';
import Team from '../Team';

export default function Home() {
  return (
    <div>
      <Header />
      <Intro />
      <Features />
      <div className="space" />
      <Team />
    </div>
  );
}
