function User(props) {
    let { user } = props;
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center m-6 border border-gray-200 transition-shadow">
            <img
                src={user.image}
                alt={user.name}
                className="w-24 h-24 rounded-full mb-4 object-cover shadow"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-1">{user.name}</h2>
            <p className="text-gray-500 text-sm mb-2">{user.email}</p>
        </div>
    );
}

export default User;