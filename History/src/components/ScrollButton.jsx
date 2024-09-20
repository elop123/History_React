
import  { useState, useEffect } from 'react';
import scrol from '../assets/images/Upward Arrow.png'
import s from '../style/ScrollButton.module.scss'

const ScrollButton = () => { 
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    const scrollTop = document.documentElement.scrollTop ;
    console.log(scrollTop)
    if (scrollTop> 50) {
      setVisible(true);
    }  
  };

  // Scroll the window to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scroll effect
    });
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={s.scrollButton} >
      <img
        src={scrol}
        onClick={()=>scrollToTop}
        className={s.scrollTopIcon}
        alt="Scroll to top"
      />
    </div>
  );
};

export default ScrollButton;
