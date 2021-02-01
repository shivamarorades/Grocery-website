import React from 'react';

let Footer=()=>{
	return(
<>

        <footer class="page-footer  black-text"style={{background: '#f7f7f7'}}
>
          <div class="row">
          <div className="container">    
              <div class="col   s3">
                <p class="black-text"style={{fontSize:"20px"}}>Information</p>
                <ul style={{marginBottom:"22px"}}>
                  <li><a class="grey-text text-darken-5" href="#!">About Us</a></li>
                  <li><a class="grey-text text-darken-5" href="#!">Customer Service</a></li>
                  <li><a class="grey-text text-darken-5" href="#!">Privacy Policy</a></li>
                  <li><a class="grey-text text-darken-5" href="#!">Sitemap</a></li>
                </ul>
              </div>

              <div class="col  s4 ">
                <p class="black-text"style={{fontSize:"20px"}}>My Account</p>
                <ul>
                  <li><a class="grey-text text-darken-5" href="#!">Sign in</a></li>
                  <li><a class="grey-text text-darken-5" href="#!">View Cart</a></li>
                  <li><a class="grey-text text-darken-5" href="#!">My Wishlist</a></li>
                  <li><a class="grey-text text-darken-5" href="#!">Help</a></li>
                </ul>
              </div>
<div class="col right s5">
                <p class="black-text"style={{fontSize:"20px"}}><i className="material-icons"style={{transform:"translate(0,0.20em)"}}>receipt
</i>Newsletter</p>
                  <li type="none"><a class="grey-text text-darken-5" href="#!">Sign up for exclusive offers.</a></li>
    <div style={{display:"flex"}}><input type="text" placeholder="Enter Your Email Here" style={{width:"19vw"}}/>
    <button className="btn hoverable waves-effect waves-light amber darken-4 white-text">Subscribe !</button>
    </div>
            </div>
            
</div>
          
          </div>
        </footer>
</>
		);
}
export default Footer;