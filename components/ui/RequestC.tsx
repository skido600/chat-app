import React from "react";
import { CiCirclePlus } from "react-icons/ci";
function RequestC() {
  return (
    <>
      <section className="z-50 px-4 py-4 sticky">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold">Chats</h1>
          <div>
            <CiCirclePlus size={25} />
          </div>
        </div>
      </section>
    </>
  );
}

export default RequestC;
