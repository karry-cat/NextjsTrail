'use client'
import {useRouter} from "next/navigation";
import {objectToQueryString} from "@/lib/util";
import Accordion from "@/components/ui/Accordion";


const FilterSection = ({searchParams}) => {
    const CategoryItems = [
        {label: "All", value: "all"},
        {label: "Kid's Clothing", value: "Kid's Clothing"},
        {label: "Men's Clothing", value: "Men's Clothing"}
    ]

    const SortByItems = [
        {label:"All",value:"all"},
        {label:"Price high to low",value:"highToLow"},
        {label:"Price low to high",value:"lowToHigh"}
    ]

    const RatingItems = [
        {label:"All",value:"all"},
        {label:"1", value:"1"},
        {label:"2", value:"2"},
        {label:"3",value:"3"},
        {label:"4", value:"4"},
        {label:"5", value:"5"}
    ]

    const AvailabilityItems = [
        {label:"All",value:"all"},
        {label:"In Stock",value:"true"},
        {label:"Out of Stock", value:"false"}
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
            <Accordion
                title="Category"
                isOpened={openAccordion.includes("productTypeId")}
                type="productTypeId"
                handleAccordion={handleAccordion}
            >
                <div className="flex flex-wrap gap-3 pt-2">
                    {
                        CategoryItems.map((item, index) => (
                            <div key={index}>
                                <input type="checkbox" id={`productType-${item.value}`} className="hidden peer"/>
                                <label htmlFor={`productType-${item.value}`} className="checkbox-button-label">
                                    {item.label}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </Accordion>
            <Accordion
                title="Sort By"
                isOpened={openAccordion.includes("sortBy")}
                type="sortBy"
                handleAccordion={handleAccordion}
            >
                <div className="flex flex-wrap gap-3 pt-2">
                    {
                        SortByItems.map((item, index) => (
                            <div key={index}>
                                <input type="checkbox" id={`sortBy-${item.value}`} className="hidden peer"/>
                                <label htmlFor={`sortBy-${item.value}`} className="checkbox-button-label">
                                    {item.label}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </Accordion>
            <Accordion
                title="Price Range"
                isOpened={openAccordion.includes("priceRange")}
                type="priceRange"
                handleAccordion={handleAccordion}
            >
                <div className="flex flex-wrap gap-3 pt-2">
                    {
                        CategoryItems.map((item, index) => (
                            <div key={index}>
                                <input type="checkbox" id={`productType-${item.value}`} className="hidden peer"/>
                                <label htmlFor={`productType-${item.value}`} className="checkbox-button-label">
                                    {item.label}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </Accordion>
            <Accordion
                title="Rating"
                isOpened={openAccordion.includes("rating")}
                type="rating"
                handleAccordion={handleAccordion}
            >
                <div className="flex flex-wrap gap-3 pt-2">
                    {
                        RatingItems.map((item, index) => (
                            <div key={index}>
                                <input type="checkbox" id={`rating-${item.value}`} className="hidden peer"/>
                                <label htmlFor={`rating-${item.value}`} className="checkbox-button-label">
                                    {item.label}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </Accordion>
            <Accordion
                title="Availability"
                isOpened={openAccordion.includes("inStock")}
                type="inStock"
                handleAccordion={handleAccordion}
            >
                <div className="flex flex-wrap gap-3 pt-2">
                    {
                        AvailabilityItems.map((item, index) => (
                            <div key={index}>
                                <input type="checkbox" id={`availability-${item.value}`} className="hidden peer"/>
                                <label htmlFor={`availability-${item.value}`} className="checkbox-button-label">
                                    {item.label}
                                </label>
                            </div>
                        ))
                    }
                </div>
            </Accordion>

        </div>
    )
}
export default FilterSection;