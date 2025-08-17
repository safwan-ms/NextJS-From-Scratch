import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="flex items-center justify-center py-6">
      <UserProfile path="/user-profile" />
    </div>
  );
};
export default UserProfilePage;
