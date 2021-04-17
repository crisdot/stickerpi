import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Yoga']);

    return (
        <>
            <div className="container-titulo">
                <h2>Gif Expert App</h2>
            </div>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                { 
                    categories.map(category => (
                    <GifGrid
                    key={category}
                    category={category}
                    />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;