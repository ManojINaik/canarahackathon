import { currentUser } from "@clerk/nextjs";
import { getAdminStatus } from "@/lib/actions/admin";
import { DashboardContent } from "./page-client";

export default async function Dashboard() {
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
  
  // Prepare user data for client component
  const userData = user ? {
    name: `${user.firstName} ${user.lastName}`,
    email: user.emailAddresses[0]?.emailAddress,
    imageUrl: user.imageUrl
  } : null;
  
  return <DashboardContent userData={userData} isAdmin={isAdmin} />;
}
