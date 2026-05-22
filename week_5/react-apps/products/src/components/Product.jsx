function Product(props) {
    const { productobj } = props;

    return (
        <div className="bg-white rounded-lg shadow-md p-6 m-4 max-w-xs border border-gray-200 hover:shadow-xl transition-shadow">
            <h5 className="text-lg font-bold mb-2 text-blue-700">{productobj.title}</h5>
            <h6 className="text-sm text-gray-500 mb-1">Category: {productobj.category}</h6>
            <p className="text-gray-700 mb-2">{productobj.description}</p>
            <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">ID: {productobj.id}</span>
        </div>
    );
}

export default Product;