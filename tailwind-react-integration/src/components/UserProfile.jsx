function UserProfile() {
  return (
    <div className="user-profile" class="bg-gray-100 md:p-8 sm:max-w-xs sm:p-4 md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" alt="User" class="rounded-full w-36 h-36 mx-auto"/>
      <h1 class="md:text-xl sm:text-lg text-blue-800 my-4">John Doe</h1>
      <p class="text-gray-600 md:text-base sm:text-sm">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;