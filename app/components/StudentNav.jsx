import React from "react";

const StudentNav = () => {
  return (
    <div>
      <Link className="sm:flex gap-4" href="/uploadCv">
        Upload CV
      </Link>
      <Link className="sm:flex gap-4" href="/jobs">
        Jobs
      </Link>
    </div>
  );
};

export default StudentNav;
