import { useState } from "react";

import type { RouterOutputs } from "@homarr/api";
import { clientApi } from "@homarr/api/client";
import { parseAppHrefWithVariablesClient } from "@homarr/common/client";

import { PingDot } from "./ping-dot";

interface PingIndicatorProps {
  href: string;
}

export const PingIndicator = ({ href }: PingIndicatorProps) => {
  const [ping] = clientApi.widget.app.ping.useSuspenseQuery(
    {
      url: parseAppHrefWithVariablesClient(href),
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  );

  const [pingResult, setPingResult] = useState<RouterOutputs["widget"]["app"]["ping"]>(ping);

  clientApi.widget.app.updatedPing.useSubscription(
    { url: parseAppHrefWithVariablesClient(href) },
    {
      onData(data) {
        setPingResult(data);
      },
    },
  );

  return (
    <PingDot
      color={"error" in pingResult || pingResult.statusCode >= 500 ? "red" : "green"}
      tooltip={"statusCode" in pingResult ? pingResult.statusCode.toString() : pingResult.error}
    />
  );
};