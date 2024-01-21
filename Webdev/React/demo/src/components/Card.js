export default function Card({imgSrc, name, title}) {
    return(
        <div class="shadow-lg m-3 w-max">
            <img src={imgSrc} alt="Profilepicture" width="300" height="300"/>
            <h1 class="font-bold text-xl p-3">{name}</h1>
            <p class="p-3 pb-6 text-xl">{title}</p>
        </div>
    );
}