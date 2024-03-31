import React from "react";

const Application = async ({ params }) => {
  const application = await getApplication(params.id);
  return <div>Application</div>;
};

export default Application;
