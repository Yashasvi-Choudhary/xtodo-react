function Header({onRefresh}){
    return(
        <header className="bg-white py-4 px-16 w-full shadow-md flex items-center justify-between fixed top-0 right-0 left-0">
            <h1 className="text-2xl ml-10 font-bold">XTodo</h1>
            <button onClick={onRefresh}
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4  rounded-lg">Refresh</button>
        </header>
    )
}
export default Header;