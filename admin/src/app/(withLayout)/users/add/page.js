import AddUser from "@/screens/users/add";

export default async function AddUserPage ({searchParams}) {
    return (
        <>
            <AddUser searchParams={await searchParams}></AddUser>
        </>
    );
}