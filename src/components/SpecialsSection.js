import React from 'react';

export default function SpecialsSection() {
    return (
        <>
        <section className='container3'>
        <h1 className='special-title'>Specials</h1>
        <button className='button-menu'>Online Menu</button>

        </section>

        <section className='specials'>

            <article className='specials-card'>
            <img src="greek salad.jpg" alt="Greek Salad"></img>
            <h1>Greek salad</h1>
            <p>$12.99</p>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <p>Order a delivery</p></article>

            <article className='specials-card'>
            <img src="Bruchetta.jpeg" alt="Bruchetta"></img>
            <h1>Bruchetta</h1><p>$5.99</p>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
            <p>Order a delivery</p>
            </article>

            <article className='specials-card'>
            <img src="lemon dessert.jpg" alt="Lemon dessert"></img>
            <h1>Lemon Dessert</h1>
            <p>$5.00</p>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
            <p>Order a delivery</p>
            </article>
        </section>

        </>
);
    }