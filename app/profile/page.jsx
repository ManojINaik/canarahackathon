import ClientLayout from "@/app/components/ClientLayout";
import ProfileForm from "./components/ProfileForm";

export const metadata = {
  title: "Profile | XtraDrill",
  description: "Update your developer profile with skills, resume, and job preferences",
};

export default function ProfilePage() {
  return (
    <ClientLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Developer Profile</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <ProfileForm />
        </div>
      </div>
    </ClientLayout>
  );
} 