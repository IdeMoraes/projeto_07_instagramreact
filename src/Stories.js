export default function Stories(){
    let stories=[
        {
            image:"assets/img/9gag.svg",
            user:"9gag"
        },
        {
            image:"assets/img/meowed.svg",
            user:"meowed"
        },
        {
            image:"assets/img/barked.svg",
            user:"barked"
        },
        {
            image:"assets/img/nathanwpylestrangeplanet.svg",
            user:"nathanwpylestrangeplanet"
        },
        {
            image:"assets/img/wawawicomics.svg",
            user:"wawawicomics"
        },
        {
            image:"assets/img/respondeai.svg",
            user:"respondeai"
        },
        {
            image:"assets/img/filomoderna.svg",
            user:"filomoderna"
        },
        {
            image:"assets/img/memeriagourmet.svg",
            user:"memeriagourmet"
        },
    ]
    return(
        <div className="stories">
            {stories.map(story => <Story image={story.image} user={story.user}/>)}
            <div className="setinha">
                <IonIcon name="chevron-forward-circle"/>
            </div>
        </div>
    );
}
function IonIcon (props){
    return(
    <ion-icon name={props.name}></ion-icon>
    );
}
function Story(props){
    return(
    <div className="story">
        <div className="imagem">
            <img src={props.image} />
        </div>
        <div className="usuario">
            {props.user}
        </div>
    </div>
    );
}