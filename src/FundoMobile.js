export default function FundoMobile(){
    const icones = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"];
    return(
        <div className="fundo-mobile">
            {icones.map(icone => <IonIcon name={icone}/>)}
        </div>
    );
}

function IonIcon (props){
    return(
    <ion-icon name={props.name}></ion-icon>
    );
}