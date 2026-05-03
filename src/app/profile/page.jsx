import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import ProfileView from "@/Components/profile/ProfileView";

export const metadata = {
    title: "Profile | BookBorrowing",
    description: "Manage your reader profile and borrowed books.",
};

const ProfilePage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
        redirect("/login");
    }

    return <ProfileView user={session.user} />;
};

export default ProfilePage;