"use client";

import { useEffect, useState } from "react";

export default function LastUpdated() {
    const [date, setDate] = useState("");

    useEffect(() => {
        // Formats date as "Month Day, Year" e.g., "February 7, 2026"
        setDate(new Date().toLocaleDateString("en-US", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }));
    }, []);

    if (!date) return null; // Prevent hydration mismatch by rendering nothing initially

    return (
        <p className="text-trust-blue-500 text-lg uppercase tracking-widest text-sm">
            Last Updated: {date}
        </p>
    );
}
