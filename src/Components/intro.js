



function Intro (props){
    return(
   <div className="div-flex">
    <div  className="big-row" >
<div className="intro-container med-row">
    <figure className="intro-pic-mask"><img src={props.me} className="intro-pic-me" /></figure>
     <h1>Hello there! I'm 💕<span className="special-color">Monet Paul</span>💕</h1>
     <p>I’m excited to tell you a bit about myself. I’ve always been interested in technology and how it can improve people’s lives and why I pursued a career in <strong className="special-color">frontend software engineering</strong>.</p>  
     <div className="intro-container-links">
     <a href="https://www.linkedin.com/in/monetpaul/" target="_blank" ><i className="fa-brands fa-linkedin symbol"></i></a>
     <a href="https://github.com/mpfuns" target="_blank"><i className="fa-brands fa-github symbol"></i></a>
     <a href="mailto:monetpaul23@gmail.com"  target="_blank"><i className="fa-solid fa-envelope symbol"></i></a>
     <a href={props.Resume}  target="_blank"><i className="fa-solid fa-file-lines symbol"></i></a>
     </div> 
</div>
<div className="intro-container small-row"><figure><img src={props.websiteImage} alt="latop and phone with website" className="intro-pic-web"/></figure></div>

    </div>
   </div> 
    )
    
    
    }
    export default Intro