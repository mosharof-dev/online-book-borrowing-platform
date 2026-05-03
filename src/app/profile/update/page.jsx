import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import UpdateProfileForm from "@/Components/profile/UpdateProfileForm";

export const metadata = {
  title: "Update Profile | BookBorrowing",
  description: "Update your personal information and profile picture.",
};

const UpdateProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return <UpdateProfileForm user={session.user} />;
};

export default UpdateProfilePage;
