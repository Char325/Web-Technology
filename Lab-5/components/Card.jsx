import React from "react";
 function Card(){
    const c=[{"key":1,"cover":"https://agathachristie.imgix.net/hcuk-paperback/Halloween-Part-v2.JPG?auto=compress,format&fit=clip&q=65&w=400",
        "link":"https://www.goodreads.com/book/show/16307.Hallowe_en_Party",
        "desc":"At a Hallowe'en party, Joyce a hostile thirteen-year-old boasts that she once witnessed a murder. When no-one believes her, she storms off home. But within hours her body is found, still in the house, drowned in an apple-bobbing tub. That night, Hercule Poirot is called in to find the evil presence. But first he must establish whether he is looking for a murderer or a double-murderer."
    },
     {"key":2,"cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP-Hped1kq-VNkI3Asvq6zSfXA3Sj6loFWMQ&usqp=CAU",
     "link":"https://www.goodreads.com/book/show/40534545-ikigai",
     "desc":"The people of Japan believe that everyone has an ikigai a reason to jump out of bed each morning. And according to the residents of the Japanese island of Okinawa  the worlds longest-living people  finding it is the key to a longer and more fulfilled life."}];
    return(
    <div className="card">
    <table>
    <tr>
    <td>
    <img src={c[0].cover} alt="book-cover" onClick={()=>window.open(c[0].link)}/>
    <h5>{c[0].desc}</h5>
    </td>
    <td>
    <img src={c[1].cover} alt="book-cover" onClick={()=>window.open(c[1].link)}/>
    <h5>{c[1].desc}</h5>
    </td>
    </tr>
    </table>
            </div>
                );
 }
 export default Card;
