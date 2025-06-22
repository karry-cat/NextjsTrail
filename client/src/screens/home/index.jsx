import FilterSection from "@/screens/home/FilterSection";
import ProductCard from "@/screens/home/ProductCard";

const HomeScreen = ({searchParams}) => {
    return (
        <div>
            <div className="my-10">
                <h1 className="text-3xl font-semibold">Products</h1>
                <div className="my-5 grid grid-cols-4 gap-5">
                    <FilterSection searchParams={searchParams}/>
                    <div className="col-span-3 grid grid-cols-2 gap-5">
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeScreen;