"use client";

import { useQueryProjectDetail } from "@/api/project/queries";
import BugInputForm from "@/components/bug-input-form";
import PageHeader from "@/components/page-header";
import { Columns } from "@/components/tables/columns";
import { DataTable } from "@/components/tables/data-table";
import { bugs } from "@/lib/data-bugs";
import React from "react";

const DetailProject = () => {
  const { detailProject } = useQueryProjectDetail();
  console.log("detail project", detailProject);

  const sortedBugs = bugs.sort((a, b) => b.skor - a.skor);

  return (
    <>
      <PageHeader title="Detail Project" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-4 pt-0">
        <div className="lg:col-span-2">
          <DataTable
            data={sortedBugs}
            columns={Columns()}
            title="Detail Bug Project"
          />
        </div>
        <BugInputForm />
      </div>
    </>
  );
};

export default DetailProject;
