
import "../CSS/Technologies.css"



export default function Technology({technology}){
    return (
        <div className="technology">
            <div className="tech-logo">
                <img src={technology.image} alt="!" width={technology.width} />
            </div>
            <p>{technology.name}</p>
        </div>
    )
}