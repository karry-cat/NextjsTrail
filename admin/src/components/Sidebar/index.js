import Link from "next/link";
import Image from "next/image";

export default function Sidebar () {

    const menuItems = [
        {text:"Dashboard", url:"/"},
        {text:"Users", url:"/users"},
        {text:"Product Type", url:"/product-type"},
        {text:"Products", url:"/products"}
    ]

    return (
        <div>
            <div>
                <h1>eStore</h1>
            </div>
            <ul>
                {
                    menuItems.map((menuItem, key) => {
                        return (
                            <li>
                                <Link href={menuItem.url}>
                                    <div>{menuItem.text}</div>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

            <div>
                <div>
                    <Image
                        height={50}
                        width={50}
                        src="./user.svg"
                        alt="User Avatar"
                        radius="sm"
                    />
                    <div> John Doe </div>
                </div>
            </div>
        </div>
    )
}