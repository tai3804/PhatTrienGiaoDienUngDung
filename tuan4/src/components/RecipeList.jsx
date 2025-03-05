import React, { useEffect, useState } from "react";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch("https://67c83cc50acf98d070858a6f.mockapi.io/Item")
        .then(r => r.json())
        .then(data => {
            setRecipes(data)
            console.log(data)
        })
    }, [])



  return (
    <div>
        {
            recipes.map((item) => (
                <>
                    <img src={item.image} alt="" />
                    <b>{item.name}</b>
                    <span>{item.time}</span>
                </>
                ))
        }
    </div>
  );
};

export default RecipeList;
