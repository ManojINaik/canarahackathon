import { getUserProfile } from "@/lib/actions/profileActions";
import { currentUser } from "@clerk/nextjs";
import { ProfileContent } from "./profile-client";

export const metadata = {
  title: "Profile | XtraDrill",
  description: "Update your developer profile with skills, resume, and job preferences",
};

export default async function ProfilePage() {
  // Get current user
  const user = await currentUser();
  
  // Get profile data from API
  let userData = null;
  if (user) {
    const response = await getUserProfile();
    if (response.success) {
      userData = {
        ...response.data,
        name: `${user.firstName} ${user.lastName}`,
        email: user.emailAddresses[0]?.emailAddress,
        imageUrl: user.imageUrl
      };
    }
  }
  
  return <ProfileContent userData={userData} />;
} 