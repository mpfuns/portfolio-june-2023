
function Intro (props){
    return(
   <div className="div-flex">
    <div  className="big-row" >
<div className="intro-container med-row">
    <figure className="intro-pic-mask"><img source={require('./img/thebestone.jpg')} className="intro-pic-me" /></figure>
     <h1>Hello there! I'm <span>💕</span><span>Monet Paul</span><span>💕</span></h1>
     <p>I’m excited to tell you a bit about myself. I’ve always been interested in technology and how it can improve people’s lives and why I pursued a career in <strong>frontend software engineering</strong>.</p>  
     <div>
     <a href="" ><i class="fa-brands fa-linkedin"></i></a>
     <a href="" ><i class="fa-brands fa-github"></i></a>
     <a href="" ><i class="fa-solid fa-envelope"></i></a>
     <a href="" ><i class="fa-solid fa-file-lines"></i></a>
     </div> 
</div>
<div><figure><img src={props.websiteImage} alt="latop and phone with website"/></figure></div>

    </div>
   </div> 
    )
    
    
    }
    export default Intro