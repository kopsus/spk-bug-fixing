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
import { inputs } from "@/lib/data-input-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function BugInputForm() {
  return (
    <form action="" className="flex flex-col gap-5">
      <h2 className="text-4xl font-bold">Add bug</h2>
      <div className="grid gap-2">
        <Label>Title</Label>
        <Input type="text" name="title" placeholder="Title" />
      </div>
      {inputs.map((input) => (
        <div key={input.name} className="grid gap-2">
          <Label>{input.label}</Label>
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Pilih..." />
            </SelectTrigger>
            <SelectContent>
              {input.options.map((option) => (
                <SelectItem key={option.title} value={option.value.toString()}>
                  {option.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ))}

      <Button type="submit">Add</Button>
    </form>
  );
}
