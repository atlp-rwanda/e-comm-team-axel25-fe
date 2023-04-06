import React from 'react';
import { useSelector } from 'react-redux';
import { categories } from '../../../data';
import { CategoryBox } from './CategoryBox';
import { RootState } from '../../../store';
import { ScrollButton, SideBarButton, Sidebar } from '../../sidebar';
import { useHomeLogic } from '../../../hooks';

export function Categories() {
  const {
    containerRef,
    currentCategory,
    handleToggleSideBar,
    isHome,
    scrollLeft,
    scrollRight,
  } = useHomeLogic();
  const sideBar = useSelector((state: RootState) => state.sideBar);

  if (!isHome) return null;

  return (
    <div className="relative flex items-center justify-center shadow-inner backdrop-blur-sm bg-primary/10">
      <SideBarButton />

      <ScrollButton direction="left" onClick={scrollLeft} />
      <div
        ref={containerRef}
        className="flex items-center justify-between pt-1 overflow-x-auto"
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

      <Sidebar isOpen={sideBar.isOpen} onClose={handleToggleSideBar} />
    </div>
  );
}
