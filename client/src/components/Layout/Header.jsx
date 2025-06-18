import {CartIcon, SearchIcon, UserIcon} from "@/components/icons";

const Header = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-semibold">Header</h1>
                    <div className="relative w-full max-w-lg">
                        <SearchIcon className="absolute left-2 top-2 w-7 h-7"/>
                        <input placeholder="Search Product..." className="custom-input pl-10"/>
                    </div>
                    <div className="flex gap-3">
                        <CartIcon className="w-7 h-7"/>
                        <UserIcon className="w-7 h-7"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;