import AddUser from "@/screens/users/add";

export default async function ({searchParams}) {
    return (
        <>
            <AddUser searchParams={await searchParams}></AddUser>
        </>
    );
}