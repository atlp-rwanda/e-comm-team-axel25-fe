import React from 'react';
import { categories } from '../../../data';
import { CategoryBox } from './CategoryBox';
import { ScrollButton } from '../../sidebar';
import { useHomeLogic } from '../../../hooks';

export function Categories() {
  const {
    containerRef, currentCategory, isHome, scrollLeft, scrollRight,
  } = useHomeLogic();

  if (!isHome) return null;

  return (
    <div className="relative flex items-center justify-center shadow-inner backdrop-blur-sm bg-primary/10 ">
      <ScrollButton direction="left" onClick={scrollLeft} />
      <div
        ref={containerRef}
        className="flex items-center justify-between pt-1 mx-10 overflow-x-auto thumb-hide"
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            icon={item.icon}
            label={item.label}
            selected={currentCategory === item.label}
          />
        ))}
      </div>

      <ScrollButton direction="right" onClick={scrollRight} />
    </div>
  );
}
