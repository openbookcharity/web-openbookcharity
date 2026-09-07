import { useState } from "react";

export type TransferState = "idle" | "pending" | "done";

/**
 * Placeholder flow for handing a funded project over to a local partner.
 * Wire this to the backend when ownership transfer goes live.
 */
export function useTransferOwnership() {
  const [state, setState] = useState<TransferState>("idle");
  const [recipient, setRecipient] = useState("");

  async function submit() {
    if (!recipient.trim()) return;
    setState("pending");
    await new Promise((resolve) => setTimeout(resolve, 600));
    setState("done");
  }

  function reset() {
    setState("idle");
    setRecipient("");
  }

  return { state, recipient, setRecipient, submit, reset };
}
