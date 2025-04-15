import { useEffect, useState } from 'react';
import Header from './components/Header';
import RecipeNote from './components/RecipeNote';
import RecipeListRow from './components/RecipeListRow';
import RecipeList2x2 from './components/RecipeList2x2';
import Footer from './components/Footer'

function App() {
  const [data, setData] = useState([]);
  const recipeSummer = data.slice(0, 4);
  const recipeVid = data.slice(4, 8);
  const edittorPick = data.slice(8, 12)
  
  useEffect(() => {
    fetch('https://67c83cc50acf98d070858a6f.mockapi.io/Item')
      .then(r => r.json())
      .then(r => setData(r))
      .catch(e => console.log(e));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Slider Section */}
      <div className="relative w-full">
        <img 
          src="src/img/slider.png" 
          alt="Summer recipes banner" 
          className="w-full h-auto object-cover"
        />
        
        <div className="absolute top-1/4 left-1/12">
          <RecipeNote />
        </div>
      </div>

      {/* Recipes Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-pink-500">This Summer Recipes</h2>
          <p className="text-lg text-gray-600 mb-8">We have all your independence Day sweets covered</p>
          <RecipeListRow data={recipeSummer}></RecipeListRow>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-pink-500">Recipes With Videos</h2>
          <p className="text-lg text-gray-600 mb-8">Cooking Up Culinary Creations with Step-by-Step Videos</p>
          <RecipeListRow data={recipeVid}></RecipeListRow>
        </div>
      </div>


      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-pink-500">Recipes With Videos</h2>
          <p className="text-lg text-gray-600 mb-8">Cooking Up Culinary Creations with Step-by-Step Videos</p>
          <RecipeList2x2 data={edittorPick}></RecipeList2x2>
        </div>
      </div>




      <Footer></Footer>
    </div>
  );
}

export default App;