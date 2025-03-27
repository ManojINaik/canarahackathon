import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";
import AdminDashboard from "../components/admin/AdminDashboard";
import { getAdminStatus, isAdminEmail } from "@/lib/actions/admin";

export default async function AdminPage() {
  try {
    const user = await currentUser();
    
    if (!user) {
      console.log("Admin page: User not logged in, redirecting to sign-in");
      return redirect("/sign-in");
    }
    
    const userEmail = user.emailAddresses?.[0]?.emailAddress || "";
    console.log("Admin page: User logged in:", user.id, userEmail);
    
    // First try to check admin status from the database
    let isAdmin = false;
    try {
      isAdmin = await getAdminStatus(user.id);
      console.log("Admin page: User database admin status:", isAdmin);
    } catch (error) {
      console.error("Admin page: Error checking admin status from database:", error);
      // Don't throw the error, continue with fallback check
    }
    
    // If database check fails or returns false, try direct email check
    if (!isAdmin) {
      try {
        isAdmin = await isAdminEmail(userEmail);
        console.log("Admin page: Fallback email admin check:", isAdmin);
      } catch (error) {
        console.error("Admin page: Error in fallback admin check:", error);
      }
    }
    
    if (!isAdmin) {
      console.log("Admin page: User is not admin, redirecting to dashboard");
      return redirect("/dashboard");
    }
    
    // Create a safe user object with only the properties we need
    const safeUser = {
      id: user.id,
      firstName: user.firstName || "Admin",
      lastName: user.lastName || "User",
      emailAddress: userEmail,
    };
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        <AdminDashboard user={safeUser} />
      </div>
    );
  } catch (error) {
    console.error("Admin page unexpected error:", error);
    
    // Log more details about the error
    if (error.stack) console.error(error.stack);
    if (error.cause) console.error("Error cause:", error.cause);
    
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p className="text-red-500">
          An unexpected error occurred: {error.message || "Unknown error"}
        </p>
        <p className="mt-4">
          <a href="/admin/setup" className="text-blue-500 hover:underline mr-4">
            Check Admin Setup
          </a>
          <a href="/dashboard" className="text-blue-500 hover:underline">
            Return to Dashboard
          </a>
        </p>
      </div>
    );
  }
} 