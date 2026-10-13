function  ProductCard(props){
    return(
         <div className="rounded-lg shadow-md p-4">
            <img className="w-full" src={props.image} alt={props.title} />
            <h2 className="font-bold text-lg mt-2">{props.title}</h2>
            <span className="text-sm text-gray-500">{props.category}</span>
            <p className="mt-1">{props.price}</p>
            <button className="mt-3 rounded bg-indigo-600 px-4 py-2 text-white">
                Add to cart
            </button>
    </div>
    )
}
export default ProductCard;