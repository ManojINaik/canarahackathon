import { FaLaptopCode } from "react-icons/fa";
import { RiDiscussLine } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import { currentUser } from "@clerk/nextjs";
import { getAdminStatus } from "@/lib/actions/admin";

const Dashboard = async () => {
  const user = await currentUser();
  
  // Handle admin status checking securely
  let isAdmin = false;
  try {
    if (user) {
      isAdmin = await getAdminStatus(user.id);
    }
  } catch (error) {
    console.error("Error checking admin status:", error);
    // Continue with isAdmin = false
  }
  
  return (
    <>
      <div className="min-h-full min-w-full pl-4 py-2">
        <h1 className="text-2xl font-bold mb-5 text-black">
          Welcome {user ? `${user.firstName} ${user.lastName}` : 'User'}!
        </h1>

        <div className="flex space-x-4">
          <a
            href="/playground"
            className="flex flex-col items-center text-center justify-between w-full p-4 border rounded bg-gray-200"
          >
            <FaLaptopCode size={40} />
            <span>Playground</span>
          </a>
          <a
            href="/dev-discuss"
            className="flex flex-col items-center justify-between w-full p-4 border rounded bg-gray-200"
          >
            <RiDiscussLine size={40} />
            <span>DevDiscuss</span>
          </a>
          <a
            href="/learn"
            className="flex flex-col items-center justify-between w-full p-4 border rounded bg-gray-200"
          >
            <MdOutlineOndemandVideo size={40} />
            <span>Learn</span>
          </a>
          
          {isAdmin && (
            <a
              href="/admin"
              className="flex flex-col items-center justify-between w-full p-4 border rounded bg-blue-100"
            >
              <FaUserShield size={40} />
              <span>Admin Panel</span>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
