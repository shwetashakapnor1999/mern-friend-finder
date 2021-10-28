import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div>
                {/* <!-- Footer
     ================================================= --> */} 
 		<footer id="footer">
       <div className="container">
       	<div className="row">
           <div className="footer-wrapper">
             <div className="col-md-3 col-sm-3">
               <a href=""><img src="images/logo-black.png" alt="" className="footer-logo" /></a>
               <ul className="list-inline social-icons">
               	<li><a href="#"><i className="icon ion-social-facebook"></i></a></li>
               	<li><a href="#"><i className="icon ion-social-twitter"></i></a></li>
               	<li><a href="#"><i className="icon ion-social-googleplus"></i></a></li>
               	<li><a href="#"><i className="icon ion-social-pinterest"></i></a></li>
               	<li><a href="#"><i className="icon ion-social-linkedin"></i></a></li>
               </ul>
             </div>
             <div className="col-md-3 col-sm-3">
               <h6>Contact Us</h6>
                 <ul className="contact">
                 	<li><i className="icon ion-ios-telephone-outline"></i>+1 (234) 222 0754</li>
                 	<li><i className="icon ion-ios-email-outline"></i>info@group4.com</li>
                   <li><i className="icon ion-ios-location-outline"></i>228 Park Ave S NY, USA</li>
                 </ul>
             </div>
           </div>
       	</div>
       </div>
       <div className="copyright">
         <p>copyright @Group4 2020. All rights reserved</p>
       </div>
 		</footer>

            </div>
        )
    }
}
export default Footer
