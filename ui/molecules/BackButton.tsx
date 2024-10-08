import { useRouter } from "next/router";
import React from "react";

import BackIcon from "../atoms/BackIcon";
import { Button, ButtonVariant } from "../atoms/Button";

const BackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()} variant={ButtonVariant.icon}>
      <BackIcon />
    </Button>
  );
};

export default BackButton;
