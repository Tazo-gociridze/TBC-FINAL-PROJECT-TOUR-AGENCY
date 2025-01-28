import { useCallback, useEffect } from 'react';

const useHeaderMenuLogic = ({ setIsMenuActive }: { setIsMenuActive: (state: boolean) => void }) => {
  const handleResize = useCallback(() => {
    if (window.innerWidth > 1023) {
      setIsMenuActive(false);
    }
  }, [setIsMenuActive]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);
  const resetState = () => {
    setIsMenuActive(false);
  };
  return {
    resetState,
  };
};

export default useHeaderMenuLogic;
