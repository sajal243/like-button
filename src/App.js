
import './App.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import { useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeBtn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLiked(!isLiked);
      setIsLoading(false);
    }, 700)
  }
  return (
    <div className="App">
      <h1>Like Button</h1>
      <div className={isLiked? "like-btn liked": "like-btn"} onClick={handleLikeBtn}>
        <span>{isLoading? <RotateRightIcon/>: isLiked ? <FavoriteIcon/> : <FavoriteBorderIcon/>  }</span>
        {isLiked ? "I Love You 😘 ": "Click Me 😊"}
      </div>
    </div>
  );
}

export default App;
