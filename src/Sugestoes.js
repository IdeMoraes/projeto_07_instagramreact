export default function Sugestoes(){
    let sugestions =[
        {
            image:"assets/img/bad.vibes.memes.svg",
            name:"bad.vibes.memes",
            reason:"Segue você"
        },
        {
            image:"assets/img/chibirdart.svg",
            name:"chibirdart",
            reason:"Segue você"
        },
        {
            image:"assets/img/razoesparaacreditar.svg",
            name:"razoesparaacreditar",
            reason:"Novo no Instagram"
        },
        {
            image:"assets/img/adorable_animals.svg",
            name:"adorable_animals",
            reason:"Segue você"
        },
        {
            image:"assets/img/smallcutecats.svg",
            name:"smallcutecats",
            reason:"Segue você"
        },
    ]
    return(
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestions.map(sugestion => <Sugestao image={sugestion.image} name={sugestion.name} reason={sugestion.reason}/>)}
        </div>
    );
}

function Sugestao(props){
    return(
    <div className="sugestao">
        <div className="usuario">
            <img src={props.image} />
            <div className="texto">
                <div className="nome">{props.name}</div>
                <div className="razao">{props.reason}</div>
            </div>
        </div>
        <div className="seguir">Seguir</div>
    </div>
    );
}