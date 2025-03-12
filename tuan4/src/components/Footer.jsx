import React from 'react'
import './Footer.css'
import footerImg from '../img/chefify-footer-img.png'

export default function Footer() {
  return (
    <div id="footer">
          <div className="column" id='about-us-container'>
            <h3>About Us</h3>
            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <div id="footer-search">
              <input type="text" placeholder='Enter your email'/>
              <button className='ml8'>Send</button>  
            </div> 
            <div className="row">
                <img src={footerImg} alt="" />

                <a className='font-size-11 mr16 ml8' href="#">2023 Chefify Company</a>
                <a className='font-size-11' href="#">Term of Service</a>|
                <a className='font-size-11' href="#">Privacy Policy</a>
            </div>
          </div>

          <div id="footer-right-container">
          <div className="column">
            <div className="learn-more">
                <h4>Learn More</h4>
                <a className='footer-item' href="#">Our Cooks</a>
                <a className='footer-item' href="#">See Our Features</a>
                <a className='footer-item' href="#">FAQ</a>
            </div>

            <div className="shop">
                <h4>Shop</h4>
                <a href="#" className="footer-item shop-item">Gift Subscription</a>
                <a href="#" className="footer-item shop-item">Send Us Feedback</a>
            </div>
          </div>
          
          <div className="column recipe">
            <h4>Recipes</h4>
            <a className='footer-item footer-recipe-item' href="#">What to Cook This Week</a>
            <a className='footer-item footer-recipe-item' href="#">Pasta</a>
            <a className='footer-item footer-recipe-item' href="#">Dinner</a>
            <a className='footer-item footer-recipe-item' href="#">Healthy</a>
            <a className='footer-item footer-recipe-item' href="#">Vegetarian</a>
            <a className='footer-item footer-recipe-item' href="#">Vegan</a>
            <a className='footer-item footer-recipe-item' href="#">Chrismas</a>
          </div>
          </div>
        </div>
  )
}
