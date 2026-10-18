import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop ensures whenever the route changes, the window scrolls to top
 * especially critical when navigating via footer links at the bottom of pages.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}
