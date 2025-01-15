"use client";

import { useMutationBug } from "@/api/bug/mutation";
import DialogLayout from "./dialog-layout";
import { Button } from "@/components/ui/button";
import { storeDialog } from "@/store/dialog";
import { useAtom } from "jotai";
import React from "react";

export const DialogDelete = () => {
  const [dialog, setDialog] = useAtom(storeDialog);
  const { serviceBug } = useMutationBug();

  const closeDialog = () => {
    setDialog((prev) => ({
      ...prev,
      show: false,
    }));
  };

  const handleDelete = async () => {
    await serviceBug({
      type: "delete",
      id: dialog.data as string,
    });
    closeDialog();
  };

  return (
    <DialogLayout
      show={dialog.type === "DELETE" && dialog.show}
      onHide={closeDialog}
      title="Hapus bug ini ?"
    >
      <div className="flex items-center justify-center gap-5">
        <Button variant={"outline"} onClick={closeDialog}>
          Cancel
        </Button>
        <Button variant={"destructive"} onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </DialogLayout>
  );
};
