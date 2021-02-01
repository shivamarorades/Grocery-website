import React from 'react';

let Nav=()=>{
	return(
<><div className="navbar-fixed">

  <nav className="white">

      <a href="#!" class="brand-logo   black-text"style={{fontFamily:"serif",fontWeight:"1000",fontSize:"2rem",textTransform:'capitalize',transform:"translate(1em,0)"}}>Jackie bourbone</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

    <div class="nav-wrapper">
      <ul className=""style={{transform:"translate(33.55em,0)",textTransform:"uppercase",letterSpacing:"2px"}}>
        <li className="waves-effect waves-yellow"><a href="sass.html"className=" black-text">Home</a></li>
        <li className="waves-effect waves-yellow"><a href="badges.html"className="black-text ">activties</a></li>
        <li className="waves-effect waves-yellow"><a href="collapsible.html"className="black-text 	">edge</a></li>
        <li className="waves-effect waves-yellow"><a href="mobile.html"className="black-text ">info</a></li>
      </ul>
    </div>
  </nav>
</div>
  <ul class="sidenav " id="mobile-demo">
    <li><a href="sass.html">Sass</a></li>
    <li><a href="badges.html">Components</a></li>
    <li><a href="collapsible.html">Javascript</a></li>
    <li><a href="mobile.html">Mobile</a></li>
  </ul>
</>
		);
}
export default Nav;