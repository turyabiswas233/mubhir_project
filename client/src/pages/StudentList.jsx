import React, { useEffect, useState } from "react";
import { CONFIG } from "../api/config";
import {
  MdArrowLeft,
  MdArrowRight,
  MdBorderLeft,
  MdCopyAll,
  MdForkLeft,
} from "react-icons/md";
import logo from "/icons/logo.svg";
const TableRow = ({ student }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      console.log("Text copied to clipboard:", text);
    });
  };
  return (
    <tr className="hover:bg-slate-400/20 text-sm lg:text-base cursor-default">
      <td className="p-2 text-center rounded-l-2xl">{student.id}</td>
      <td className="px-2">{student.first_name}</td>
      <td className="px-2">{student.full_name}</td>
      <td className="px-2 gap-1">
        {student.email}
        <MdCopyAll
          className="inline-flex ml-1 cursor-pointer"
          onClick={() => copyToClipboard(student.email)}
        />
      </td>
      <td className="px-2 gap-1">
        {student.phone}
        <MdCopyAll
          className="inline-flex ml-1 cursor-pointer"
          onClick={() => copyToClipboard(student.phone)}
        />
      </td>
      <td className="px-2 rounded-r-2xl">
        {new Date(student.created_at)
          .toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
          .replace(/ /g, "-")}
      </td>
    </tr>
  );
};
function sortById(a, b) {
  if (a.id < b.id) return -1;
  else return 1;
}
function StudentList() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const rowPerPage = 25;

  const onNext = () => {
    if (currentPage * rowPerPage < students.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const onPrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getStudents = async () => {
    try {
      const response = await fetch(`${CONFIG.API}/registrations`, {
        method: "GET",
      });
      if (response.status !== 200) {
        throw new Error("Failed to load data");
      }

      const data = await response.json();
      console.log(data);

      if (data.status === false) {
        throw new Error("Failed to load data");
      }
      setStudents(data.data?.sort(sortById));
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div className="bg-white w-full">
      <header>
        <div className="flex items-center justify-center w-fit gap-2">
          <img
            className="min-w-10 object-cover"
            src={logo}
            alt="logo"
            width={36}
            height={36}
          />{" "}
          <p className="font-semibold text-xl">Mubhir</p>
        </div>
        <h2 className="text-center">Mubhir Registered Students</h2>
      </header>
      <div className="p-4 lg:p-10 my-4 rounded-xl text-white bg-gradient-to-r from-slate-800 to-slate-900 overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
          </div>
        ) : errorMessage ? (
          <div className="text-red-500 text-center">{errorMessage}</div>
        ) : (
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-800 gap-2 max-md:text-xs">
                <th className="bg-slate-400/30 rounded-2xl px-3 py-1">ID</th>
                <th className="bg-slate-400/30 rounded-2xl px-3 py-1">
                  First Name
                </th>
                <th className="bg-slate-400/30 rounded-2xl px-3 py-1">
                  Full Name
                </th>
                <th className="bg-slate-400/30 rounded-2xl px-3 py-1">Email</th>
                <th className="bg-slate-400/30 rounded-2xl px-3 py-1">Phone</th>
                <th className="bg-slate-400/30 rounded-2xl px-3 py-1">
                  Created At
                </th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter((ele, id) => {
                  if (
                    id + 1 > (currentPage - 1) * rowPerPage &&
                    id + 1 <= currentPage * rowPerPage
                  ) {
                    return ele;
                  }
                })
                .map((student, id) => (
                  <TableRow key={student.id} student={student} />
                ))}
            </tbody>
          </table>
        )}

        <div className="w-fit flex justify-center items-center gap-2 mx-auto mt-10">
          <button
            className="bg-blue-500 rounded-md p-1"
            type="button"
            onClick={onPrev}
          >
            <MdArrowLeft color="black" size={30} />
          </button>
          <p className="bg-slate-500/30 rounded-md w-10 p-2 text-center">
            {currentPage}
          </p>
          <button
            className="bg-blue-500 rounded-md p-1"
            type="button"
            onClick={onNext}
          >
            <MdArrowRight color="black" size={30} />
          </button>
        </div>
        <p className="text-gray-500 text-center pt-5">Showing <span className="text-blue-100">{rowPerPage}</span> on per page</p>
      </div>
    </div>
  );
}

export default StudentList;
