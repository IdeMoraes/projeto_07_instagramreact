export default function Usuario(){
    return(
        <Profile image="assets/img/catanacomics.svg" completeName="catanacomics" name="Catana"/>

    );
}
function Profile(props){
    return(
        <div className="usuario">
            <img src={props.image} />
            <div className="texto">
                <strong>{props.completeName}</strong>
                {props.name}
            </div>
        </div> 
    );
}