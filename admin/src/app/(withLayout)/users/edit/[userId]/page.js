import EditUser from "@/screens/users/edit";

const EditUserPage = async ({params})=>{
    return (
        <>
            <EditUser params={await params}></EditUser>
        </>
    )
}

export default EditUserPage;