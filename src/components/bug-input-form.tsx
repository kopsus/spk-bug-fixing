"use client";

import React from "react";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  ageBug,
  risk,
  sdm,
  severity,
  stakeholder,
  status,
  time,
} from "@/lib/data-input-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useQueryProject, useQueryProjectDetail } from "@/api/project/queries";
import { storeDialog } from "@/store/dialog";
import { useAtom } from "jotai";
import { TypeBug } from "@/api/bug/types";
import { useMutationBug } from "@/api/bug/mutation";
import { Loader } from "lucide-react";

export default function BugInputForm() {
  const [dialog, setDialog] = useAtom(storeDialog);
  const { dataProjects } = useQueryProject();
  const { detailProject, refetch } = useQueryProjectDetail();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;

    setDialog((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [name]: value,
      },
    }));
  };

  const onValueChange = (value: string, name: string) => {
    setDialog((prev) => ({
      ...prev,
      data: {
        ...(prev.data as TypeBug),
        [name]: value,
      },
    }));
  };

  const { serviceBug, isPending } = useMutationBug();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const payload = {
      ...dialog.data,
      projectId: detailProject
        ? detailProject?.id
        : Number(dialog.data?.projectId),
      severity: Number(dialog.data?.severity),
      waktu_perbaikan: Number(dialog.data?.waktu_perbaikan),
      risiko_perbaikan: Number(dialog.data?.risiko_perbaikan),
      prioritas_stakeholder: Number(dialog.data?.prioritas_stakeholder),
      usia_bug: Number(dialog.data?.usia_bug),
      ketersediaan_sdm: Number(dialog.data?.ketersediaan_sdm),
    };
    if (dialog.type === "UPDATE") {
      await serviceBug({
        type: "update",
        body: payload,
        id: dialog.data?.id,
      });
    } else {
      await serviceBug({
        type: "create",
        body: payload,
      });
    }
    refetch();
    setDialog((prev) => ({
      ...prev,
      data: null,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <h2 className="text-4xl font-bold">
        {dialog.type === "UPDATE" ? "Update" : "Add"} bug
      </h2>
      <div className="grid gap-2">
        <Label>Title</Label>
        <Input
          type="text"
          name="title"
          placeholder="Title"
          value={dialog.data?.title ?? ""}
          onChange={onInputChange}
          required
        />
      </div>
      {!detailProject ? (
        <div className="grid gap-2">
          <Label>Project</Label>
          <Select
            required
            onValueChange={(value) => onValueChange(value, "projectId")}
            value={dialog.data?.projectId ?? ""}
          >
            <SelectTrigger>
              <SelectValue placeholder="Pilih..." />
            </SelectTrigger>
            <SelectContent>
              {dataProjects?.map((option) => (
                <SelectItem key={option.id} value={option.id}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : null}
      <div className="grid gap-2">
        <Label>Tingkat keparahan</Label>
        <Select
          required
          onValueChange={(value) => onValueChange(value, "severity")}
          value={dialog.data?.severity ?? ""}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih..." />
          </SelectTrigger>
          <SelectContent>
            {severity.map((option) => (
              <SelectItem key={option.title} value={option.value.toString()}>
                {option.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label>Waktu perbaikan</Label>
        <Select
          required
          onValueChange={(value) => onValueChange(value, "waktu_perbaikan")}
          value={dialog.data?.waktu_perbaikan ?? ""}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih..." />
          </SelectTrigger>
          <SelectContent>
            {time.map((option) => (
              <SelectItem key={option.title} value={option.value.toString()}>
                {option.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label>Resiko perbaikan</Label>
        <Select
          required
          onValueChange={(value) => onValueChange(value, "risiko_perbaikan")}
          value={dialog.data?.risiko_perbaikan ?? ""}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih..." />
          </SelectTrigger>
          <SelectContent>
            {risk.map((option) => (
              <SelectItem key={option.title} value={option.value.toString()}>
                {option.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label>Prioritas stakeholder</Label>
        <Select
          required
          onValueChange={(value) =>
            onValueChange(value, "prioritas_stakeholder")
          }
          value={dialog.data?.prioritas_stakeholder ?? ""}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih..." />
          </SelectTrigger>
          <SelectContent>
            {stakeholder.map((option) => (
              <SelectItem key={option.title} value={option.value.toString()}>
                {option.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label>Usia bug</Label>
        <Select
          required
          onValueChange={(value) => onValueChange(value, "usia_bug")}
          value={dialog.data?.usia_bug ?? ""}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih..." />
          </SelectTrigger>
          <SelectContent>
            {ageBug.map((option) => (
              <SelectItem key={option.title} value={option.value.toString()}>
                {option.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label>Ketersediaan SDM</Label>
        <Select
          required
          onValueChange={(value) => onValueChange(value, "ketersediaan_sdm")}
          value={dialog.data?.ketersediaan_sdm ?? ""}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih..." />
          </SelectTrigger>
          <SelectContent>
            {sdm.map((option) => (
              <SelectItem key={option.title} value={option.value.toString()}>
                {option.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-2">
        <Label>Status</Label>
        <Select
          required
          onValueChange={(value) => onValueChange(value, "status")}
          value={dialog.data?.status ?? ""}
        >
          <SelectTrigger>
            <SelectValue placeholder="Pilih..." />
          </SelectTrigger>
          <SelectContent>
            {status.map((option) => (
              <SelectItem key={option.title} value={option.value.toString()}>
                {option.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? <Loader /> : dialog.type === "UPDATE" ? "Update" : "Add"}
      </Button>
    </form>
  );
}
