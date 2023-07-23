
export default function Footer (props){


    return(
        <footer>
            <div className="small-row footer__row">
                <a href="#">
                    <figure>
                        <img src={props.logoImage} className="footer__logo--img"/>
                    </figure>
                </a>
                <div className="footer__links--list">
                   <a href="https://github.com/mpfuns"  className=" footer__link link-hover-effect link-hover-effect-black" target="_blank">Github</a> 
                   <a href="https://www.linkedin.com/in/monetpaul/"  className=" footer__link link-hover-effect link-hover-effect-black" target="_blank">LinkedIn</a> 
                   <a href="mailto:monetpaul23@gmail.com"  className=" footer__link link-hover-effect link-hover-effect-black" target="_blank">Email</a> 
                   <a href=""  className=" footer__link link-hover-effect link-hover-effect-black" target="_blank">Resume</a> 

                </div>
            </div>
        </footer>
    )
}