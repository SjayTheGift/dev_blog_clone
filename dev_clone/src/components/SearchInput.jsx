
const SearchInput = () => {
  return (
    <form>
        <div className="md:w-[400px]">
            <div className="relative w-full">
                <input type="search" 
                id="search-dropdown" 
                className="py-2 pl-2 w-full
                bg-white border border-slate-400 rounded-md focus:border-[#4350e0] 
                focus:border-2 focus:outline-none placeholder:text-gray-600 placeholder:text-md"
                placeholder="Search..." />
                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium 
                h-full hover:bg-purple-rgba hover:text-[#4350e0] 
                rounded-r-md  focus:ring-4 
                border-r border-t border-b border-slate-400
                focus:outline-none focus:border-[#4350e0] 
                ">
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </div>
    </form>
  )
}

export default SearchInput