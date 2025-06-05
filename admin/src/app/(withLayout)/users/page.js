import UsersScreen from "@/screens/users";
import {getUsers} from "@/actions/userActions";

export default async function UsersPage() {
    return (
        <>
            <UsersScreen users={await getUsers()}></UsersScreen>
        </>
    );
}