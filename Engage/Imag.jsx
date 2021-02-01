import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
let Imag=()=>{
	document.addEventListener('DOMContentLoaded',function(){
		var elems=document.querySelectorAll('.materialboxed');
		var instances=M.Materialbox.init(elems,{});
	});
	return(
<>
<div className="row">
<div className="container">
<div className="col s12 white-text "style={{display:"inline-flex",justifyContent:"space-between"}}>

<div className="image1 materialboxed "style={{display:"grid",placeItems:"center"}}><h5>unleash</h5></div>
<div className="image2  materialboxed "style={{display:"grid",placeItems:"center"}}><h5>synergize</h5></div>
<div className="image3  materialboxed "style={{display:"grid",placeItems:"center"}}><h5>procrastinate</h5></div>

</div>
</div>
</div>
</>
		);
}
export default Imag;