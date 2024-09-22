// "use client";
// import { useRouter } from "next/router";
// import AddUser from "@/components/addUser";
// import UserList from "@/components/list/UserList";
// import AdminPanel from "@/components/AdminPanel"; // AdminPanel bileşenini import et

// export default function AdminSectionPage() {
//   const router = useRouter();
//   const { section } = router.query; // URL'den section parametresini alır

//   return (
//     <AdminPanel>
//       <div className="ml-64 flex h-full w-full flex-col items-center justify-start bg-blue-600 dark:bg-slate-600">
//         <h1 className="text-xl font-bold dark:text-white">Admin - {section}</h1>
//         {section === "userlist" && <UserList />}
//         {section === "adduser" && <AddUser />}
//       </div>
//     </AdminPanel>
//   );
// }
