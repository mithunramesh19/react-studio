// TODO: create a component that displays a single bakery item
export default function BakeryItem(props){
    return (
        <div className="bakery-item">
        <img src={props.image} alt={props.name} />
        <h3>{props.name}</h3>
        <p>${props.price}</p>
        <button>Add to cart</button>
        </div>
    );
}