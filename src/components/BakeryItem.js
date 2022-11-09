// TODO: create a component that displays a single bakery item
export default function BakeryItem({item, index, onClick}){
    return (
        <div className="bakery-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <button onClick={() => onClick(index, item.price)}> Add to cart</button>
        </div>
    );
}