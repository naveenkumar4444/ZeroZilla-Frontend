import React from "react";

const Profile = () => {
  return (
    <div className="text-center pt-10 bg-slate-600 h-[100vh] text-white">
      <div className="h-60 w-60 mx-auto">
        <img
          className="h-full w-full rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
      </div>
      <div className="text-4xl my-5">Mark Zuckerberg</div>
      <div className="text-xl my-5">+1 523 456 201</div>
      <div className="text-lg font-bold">markzuckerberg@gmail.com</div>
    </div>
  );
};

export default Profile;
