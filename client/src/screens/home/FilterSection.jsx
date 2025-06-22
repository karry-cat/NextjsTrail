'use client'
import {ChevronDownIcon} from "@/components/icons";
import {useRouter} from "next/navigation";
import {cn, objectToQueryString} from "@/lib/util";


const FilterSection = ({searchParams}) => {
    const categoryItems = [
        {label: "All", value: "all"},
        {label: "Kid's Clothing", value: "Kid's Clothing"},
        {label: "Men's Clothing", value: "Men's Clothing"}
    ]

    const router = useRouter();
    const openAccordion = searchParams.openAccordion?.split(",") || [];
    const updateSearchParams = (newParamsArray) => {
        const updatedSearchParams = {...searchParams};
        // console.log("NewParamsArray :", newParamsArray);

        newParamsArray?.forEach((param) => {
            Object.entries(param).forEach(([key, value]) => {
                if (value === null || value === "") {
                    delete updatedSearchParams[key];
                } else {
                    updatedSearchParams[key] = value;
                }
            })
        })
        // console.log("After updatedSearchParams : ", updatedSearchParams);
        router.push(`/?${objectToQueryString(updatedSearchParams)}`);
    }

    // updateSearchParams([{openAccordion: "category"}]);
    const handleAccordion = (value) => {
        const newOpenAccordion = openAccordion.includes(value)
            ? openAccordion.filter((item) => item !== value)
            : [...openAccordion, value];
        updateSearchParams([{openAccordion: newOpenAccordion.join(",")}]);
    }

    return (
        <div className="rounded-lg shadow-lg space-y-3 p-5 bg-white h-fit">
            <h1 className="text-2xl mb-8 font-semibold">Filters</h1>

            <div className="space-y-2 border-b border-b-gray-300 pb-3">
                <div className="accordian-button" onClick={() => handleAccordion("category")}>
                    <span>Category</span>
                    <ChevronDownIcon/>
                </div>
                <div className={cn("max-h-0 overflow-hidden", openAccordion.includes("category") && "max-h-96")}>
                    <div className="flex flex-wrap gap-3 pt-2">
                        {
                            categoryItems.map((item, index) => (
                                <div key={index}>
                                    <input type="checkbox" id={`productType-${item.value}`} className="hidden peer"/>
                                    <label htmlFor={`productType-${item.value}`} className="checkbox-button-label">
                                        {item.label}
                                    </label>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}
export default FilterSection;