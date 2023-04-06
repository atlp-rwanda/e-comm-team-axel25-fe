import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from './useSideBar';

export const useHomeLogic = () => {
  const dispatch = useDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.scrollLeft);
      }
    };

    const currentContainerRef = containerRef.current;
    if (currentContainerRef) {
      currentContainerRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentContainerRef) {
        currentContainerRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const { search, pathname } = useLocation();
  const params = new URLSearchParams(search);
  const currentCategory = params.get('category');
  const isHome = pathname === '/';

  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: scrollPosition - 400,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: scrollPosition + 400,
        behavior: 'smooth',
      });
    }
  };

  return {
    isHome,
    containerRef,
    currentCategory,
    handleToggleSideBar,
    scrollLeft,
    scrollRight,
  };
};
