"use client";

import { useQueryProject } from "@/api/project/queries";
import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const ProjectPage = () => {
  const { dataProjects } = useQueryProject();

  return (
    <>
      <PageHeader title="Project" />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-0">
        {dataProjects?.map((project) => (
          <Link
            key={project.id}
            href={`/project/${project.id}`}
            className="flex flex-col bg-neutral-100 p-3 rounded-lg"
          >
            <h3 className="font-bold text-2xl">{project.name}</h3>
            <p className="text-neutral-400">{project.description}</p>

            <p className="text-xl text-red-400">
              {project.bugs?.length === 0 ? 0 : project.bugs?.length} bugs
            </p>

            <Button variant="outline" className="self-end mt-4">
              Visit project
            </Button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProjectPage;
