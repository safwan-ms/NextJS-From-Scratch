const User = async ({ params }: { params: { userid: number } }) => {
  const { userid } = params;
  return (
    <div>
      <h1>User Profile: {userid}</h1>
    </div>
  );
};
export default User;
