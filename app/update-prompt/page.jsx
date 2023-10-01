"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import Form from "@components/Form";

const EditPrompt = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const promptId = useSearchParams.get("id");

  const router = useRouter();

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("Prompt ID not found!");

    try {
      const res = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });
      if (res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    const getPromptDetails = async () => {
      const res = await fetch(`/api/prompt/${promptId}`);
      const data = await res.json();

      setPost({ prompt: data.prompt, tag: data.tag });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  return (
    <Form
      type="Edit"
      post={post}
      submitting={submitting}
      setPost={setPost}
      handleSubmit={updatePrompt}
    />
  );
};

export default EditPrompt;
