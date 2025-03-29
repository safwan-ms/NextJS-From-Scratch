const User = async ({ params }: { params: { user: string } }) => {
  const { user } = params;
  return (
    <div>
      <h1>
        User Name is <span className="font-bold">{user}</span>
      </h1>
    </div>
  );
};
export default User;
