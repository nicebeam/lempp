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
            <h1>Title of dish</h1>
            <p>Price</p>
            <p>This dish is this</p>
            <p>Order this dish</p></article>

            <article className='specials-card'>
            <h1>Title of dish</h1>
            <p>Price</p>
            <p>This dish is this</p>
            <p>Order this dish</p>
            </article>

            <article className='specials-card'>
            <h1>Title of dish</h1>
            <p>Price</p>
            <p>This dish is this</p>
            <p>Order this dish</p>
            </article>
        </section>

        </>
);
    }