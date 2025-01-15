"use client";

import { useQuerBugs } from "@/api/bug/queries";
import BugInputForm from "@/components/bug-input-form";
import PageHeader from "@/components/page-header";
import { Columns } from "@/components/tables/columns";
import { DataTable } from "@/components/tables/data-table";
import React from "react";

const Bugpage = () => {
  const { dataBugs } = useQuerBugs();
  return (
    <>
      <PageHeader title="Bugs" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 p-4 pt-0">
        <div className="lg:col-span-2">
          <DataTable
            data={dataBugs ?? []}
            columns={Columns()}
            title="All Bugs"
          />
        </div>
        <BugInputForm />
      </div>
    </>
  );
};

export default Bugpage;
