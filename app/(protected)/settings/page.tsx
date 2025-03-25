"use client"

import { logout } from "@/actions/logout";
import { useCurrentUser } from "@/hooks/user-current-user";

const SettingsPage = ()=>{
    const user = useCurrentUser();

    const onClick = ()=>{
        logout();
    }
    return(
        <div className="bg-white p-10 rounded-xl">
            <form action = {onClick}>
                <button  type = "submit">
                SignOut
                </button>

            </form>
        </div>
    )
};

export default SettingsPage;


// "use client"

// import { logout } from "@/actions/logout";
// import { useCurrentUser } from "@/hooks/user-current-user";

// const SettingsPage = () => {
//     const  user  = useCurrentUser();

//     return (
//         <div className="">
//             {JSON.stringify(user)}
//             <form action={logout}>
//                 <button type="submit">
//                     SignOut
//                 </button>
//             </form>
//         </div>
//     )
// };

// export default SettingsPage;