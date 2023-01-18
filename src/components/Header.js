import React from 'react';

export default function Header() {
    return (
        <>
        <header>
         <article className='container'>
            <section className='header-info' >
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
            <button>Book Online</button></section>

            <section className='header-image'>
            <img src="restaurantfood.jpg" alt="Dish" width="300px" className='header-image'></img>
            </section>
            </article>
            </header>
            </>
);
    }


