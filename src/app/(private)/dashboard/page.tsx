"use client";

import { useQuerBugs } from "@/api/bug/queries";
import { PieChartDonut } from "@/components/charts/pie-donut";
import PageHeader from "@/components/page-header";
import { Columns } from "@/components/tables/columns";
import { DataTable } from "@/components/tables/data-table";
import React from "react";

const Dashboard = () => {
  const { dataBugs } = useQuerBugs();
  return (
    <>
      <PageHeader title="Dashboard" />
      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-4 p-4 pt-0">
        <div className="lg:col-span-2">
          <DataTable
            title="Top 10 Prioritas Bug"
            data={dataBugs ?? []}
            columns={Columns({ showAction: false })}
          />
        </div>
        <div className="flex flex-col gap-3">
          <PieChartDonut />
          <div className="flex-1 border rounded-lg p-4 grid place-content-center">
            <p className="text-8xl font-bold text-center">{dataBugs?.length}</p>
            <p className="text-3xl font-bold text-center">Bug collected</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
