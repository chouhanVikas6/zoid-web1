"use client";

import { useEffect } from "react";
import { event } from "@/lib/gtag";

interface TrackerProps {
  leaderName: string;
}

export default function LeaderPageTracker({ leaderName }: TrackerProps) {
  useEffect(() => {
    // Tracking the page view with the leader's name
    event({
      action: "view_leader_profile",
      category: "Leadership",
      label: leaderName,
    });

    // Log additional client-side info for debugging/verification if requested, 
    // although gtag captures most of this automatically.
  }, [leaderName]);

  return null;
}
