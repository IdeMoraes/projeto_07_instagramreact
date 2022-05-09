export default function Posts(){
    let posts =[
        {
            userImage:"assets/img/meowed.svg",
            userName:"meowed", 
            postImage:"assets/img/gato-telefone.svg", 
            mainLike:"respondeai", 
            mainLikeImage:"assets/img/respondeai.svg", 
            likeNumber:"101.523"
        },
        {
            userImage:"assets/img/barked.svg", 
            userName:"barked", 
            postImage:"assets/img/dog.svg", 
            mainLike:"adorable_animals", 
            mainLikeImage:"assets/img/adorable_animals.svg", 
            likeNumber:"99.159" 
        }
    ]
    return(
        <div className="posts">
            {posts.map(post => <Post userImage={post.userImage} userName={post.userName} postImage={post.postImage} mainLike={post.mainLike} mainLikeImage={post.mainLikeImage} likeNumber={post.likeNumber}/>)}
        </div>
    );
}
function IonIcon (props){
    return(
    <ion-icon name={props.name}></ion-icon>
    );
}
function Post (props){
    return(
    <div className="post">
        <div className="topo">
            <div className="usuario">
                <img src={props.userImage} />
                {props.userName}
            </div>
            <div className="acoes">
                <IonIcon name="ellipsis-horizontal"/>
            </div>
        </div>
        <div className="conteudo">
            <img src={props.postImage} />
        </div>
        <div className="fundo">
            <div className="acoes">
                <div>
                    <IonIcon name="heart-outline"/>
                    <IonIcon name="chatbubble-outline"/>
                    <IonIcon name="paper-plane-outline"/>
                </div>
                <div>
                    <IonIcon name="bookmark-outline"/>
                </div>
            </div>
            <div className="curtidas">
                <img src={props.mainLikeImage} />
                <div className="texto">
                    Curtido por <strong>{props.mainLike}</strong> e <strong>outras {props.likeNumber} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    );
}