import React from 'react';
import img1 from './images/pepper.jpg';
import img2 from './images/jars.jpg';
import img3 from './images/pot.jpg';
import img4 from './images/teapot.jpg';

let Card=()=>{
	const arr=['$10.45','$11.50','$45.50','$24.99','$18.99'];

let Card2=(props)=>{
	console.log(props);
	return(
<>
<div class="col xl3 m7">
<div class="card  hoverable">
        <div class="card-image">
          <img src={props.imag}/>
        </div>
        <div class="card-content">
        <h6 style={{color:"brown"}}>Premium Niche</h6>
          <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. 
          Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
  <h6 style={{color:"brown"}}><strike style={{marginRight:"0.44em",color:"grey"}}>{props.stric}</strike>{props.price}</h6>
<div><input type="text" value="1" /><button className="hoverable btn amber waves-effect waves-light darken-3 white-text">Add to cart</button></div>
        </div>
      </div>
      </div>
</>
		);

	};return(
<>
<div class="row">

      
    <Card2 imag={img1} price={arr[0]}/>
    <Card2 imag={img2} stric={arr[3]} price={arr[4]}/>
<Card2 imag={img3} price={arr[1]} />
<Card2 imag={img4} price={arr[2]}/>
    </div>
</>
		);
}
export default Card;