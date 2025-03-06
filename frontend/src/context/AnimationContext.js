import React, { createContext, useState, useContext, useEffect } from 'react';

const AnimationContext = createContext({
  isLoaded: false,
  setIsLoaded: () => {},
});

export const AnimationProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Добавляем небольшую задержку для уверенности, что все ресурсы загружены
      setTimeout(() => setIsLoaded(true), 100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimationContext.Provider value={{ isLoaded, setIsLoaded }}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimation = () => useContext(AnimationContext); 