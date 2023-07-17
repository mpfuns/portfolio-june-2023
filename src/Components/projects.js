

function Projects (props){


    return(
        <div>
            <img src={props.image} />
            <h2>{props.title}</h2>
            <h4>{props.skils}</h4>
            <p></p>
            <a href="https://github.com/mpfuns" ><i className="fa-brands fa-github "></i></a>
            <a href="https://github.com/mpfuns" ><i class="fa-solid fa-arrow-up-right-from-square"></i></a>



        </div>
    )
}
export default Projects