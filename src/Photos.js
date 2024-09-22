import React from "react";
import "./Photos.css";

export default function Photos(props){
    
    if (props.photos){
        return(
            <section className="Photos">
            <div className="row">
                {props.photos.map(function(photo, index){
                    return(
                        <div className="col-md-4" key={index}>
                         <a href={photo.src.original} target="_blank" rel="noreferrer" title="Open original photo">  
                        <img src={photo.src.landscape} className="img-fluid picture" alt={props.alt} />
                        </a> 
                        </div>
                    )
                })}
            </div>
            </section>
        )
    }else{
        return null;
    }
    
}