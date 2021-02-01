import React from 'react';
import Service from './images/service.jpg';
import Service2 from './images/map.jpg';

let Fight=()=>{
	return(
<>
<div className="row center">
<div className="container">
<div className="col s12">
<img src={Service} className="responsive-img" />
</div>
</div>
</div>
<div className="row center">
<div className="">
<div className="col s12">
<h3 style={{textTransform:"capitalize",color:"brown"}}>find us</h3>
<img src={Service2} className="responsive-img" /><br/>
<h5 style={{color:"grey"}}>31 Spooner Street, Quahog, Rhode Island</h5>
<h4 style={{textTransform:"capitalize",color:"brown"}}>contact us</h4>
<p style={{color:"grey",fontSize:"22px"}}><i className="material-icons "style={{fontSize:"22px",transform:"translate(0,0.20em)"}}>local_phone</i> +1(23) 456 7890<br/>info@example.com


</p>

</div>
</div>
</div>
</>
		);
}
export default Fight;