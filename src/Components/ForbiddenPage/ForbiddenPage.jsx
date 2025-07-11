import React from "react";

const ForbiddenPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500">403</h1>
        <p className="text-xl mt-4">
          Access Denied. You are not authorized to view this page.
        </p>
        <a href="/" className="mt-6 inline-block text-blue-600 underline">
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ForbiddenPage;
