import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Stack, Skeleton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { getHeader } from "../../Features/actions/header";

const ViewHeaderContent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { headerData, isDeleted, isLoading } = useSelector(
    (state) => state.header
  );
  console.log(headerData[0]?.title);

  useEffect(() => {
    dispatch(getHeader());
  }, []);

  const updatedAtDate = headerData[0]?.updatedAt
    ? new Date(headerData[0]?.updatedAt)
    : null;
  const formattedDate = updatedAtDate
    ? updatedAtDate.toISOString().split("T")[0]
    : "";

  return (
    <>
      <div className="max-w-screen-xl mt-10 mx-auto px-4 md:px-8">
        <div className="items-start justify-between md:flex">
          <div>
            <h3 className="px-1 text-gray-800 text-xl font-bold sm:text-2xl">
              Manage Header Content
            </h3>
          </div>

          <div className="mt-3 md:mt-0">
            <a
              onClick={() => {
                navigate(`/updateHeader/${headerData[0]?._id}`);
              }}
              className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
            >
              Update Header Content
            </a>
          </div>
        </div>

        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Id</th>

                <th className="py-3 px-6">Title</th>
                <th className="py-3 px-6">Description</th>
                <th className="py-3 px-6">Updated On</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {isLoading ? (
                <tr>
                  <td colSpan="6" className="text-center px-6 py-8">
                    <Stack spacing={4}>
                      <Skeleton variant="rounded" height={30} />
                      <Skeleton variant="rounded" height={25} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                      <Skeleton variant="rounded" height={20} />
                    </Stack>
                  </td>
                </tr>
              ) : (
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {headerData[0]?._id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {headerData[0]?.title}
                  </td>
                  <td
                    dangerouslySetInnerHTML={{
                      __html: headerData[0]?.description,
                    }}
                    className="px-6 py-4 whitespace-nowrap"
                  ></td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {formattedDate}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewHeaderContent;


