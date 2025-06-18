import {CartIcon, UserIcon} from "@/components/icons";

const Header = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-semibold">Header</h1>
                    <input placeholder="Search Product..." className="bg-gray-100"/>
                    <div className="flex gap-3">
                        <CartIcon/>
                        <UserIcon/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;