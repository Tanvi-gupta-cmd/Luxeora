import CollectionCard from "./CollectionCard";
import "./Collections.css";

import ring from "../../assets/images/ring.jpg";
import necklace from "../../assets/images/necklace.jpg";
import earrings from "../../assets/images/earring.jpg";

export default function Collections(){

const data=[

{
title:"Diamond Rings",
subtitle:"Luxury crafted brilliance",
image:ring
},

{
title:"Gold Necklaces",
subtitle:"Timeless elegance",
image:necklace
},

{
title:"Premium Earrings",
subtitle:"Designed for every occasion",
image:earrings
}

];

return(

<section className="collections" id="collections">

<p className="section-tag">

FEATURED COLLECTIONS

</p>

<h2>

Curated Luxury

</h2>

<div className="collections-grid">

{

data.map((item,index)=>

<CollectionCard
key={index}
{...item}
/>

)

}

</div>

</section>

)

}