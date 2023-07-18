

function Projects (props){


    return(
        <div>
            <img src={props.image} />
            <h2>{props.title}</h2>
            <h4>{props.skills}</h4>
            <p>{props.para}</p>
            <a href={props.github}><i className="fa-brands fa-github "></i></a>
            <a href={props.link} ><i class="fa-solid fa-arrow-up-right-from-square"></i></a>



        </div>
    )
}
export default Projects