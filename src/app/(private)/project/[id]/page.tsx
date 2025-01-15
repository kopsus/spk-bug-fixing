"use client";

import { useQueryProjectDetail } from "@/api/project/queries";
import BugInputForm from "@/components/bug-input-form";
import PageHeader from "@/components/page-header";
import { Columns } from "@/components/tables/columns";
import { DataTable } from "@/components/tables/data-table";
import React from "react";

const DetailProject = () => {
  const { detailProject } = useQueryProjectDetail();

  return (
    <>
      <PageHeader title={`Detail ${detailProject?.name}`} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-4 pt-0">
        <div className="lg:col-span-2">
          <DataTable
            data={detailProject?.bugs ?? []}
            columns={Columns()}
            title={`Detail Bug ${detailProject?.name}`}
          />
        </div>
        <BugInputForm />
      </div>
    </>
  );
};

export default DetailProject;
