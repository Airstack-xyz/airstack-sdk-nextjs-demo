"use client";
import { init, useQuery } from "@airstack/airstack-react";

// ADD YOUR API KEY HERE
init("API_KEY");

const query = `query ETHTokyo {
  Poaps(input: {filter: {eventId: {_eq: "125092"}}, blockchain: ALL, limit: 25}) {
    Poap {
      owner {
        identity
        primaryDomain {
          name
        }
        domains {
          name
        }
      }
    }
  }
}`;
export default function Home() {
  const { data, loading, error } = useQuery(query, {});

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && data?.Poaps?.Poap && (
        <ul>
          {data?.Poaps.Poap.map((poap: any, index: number) => (
            <li key={index}>{poap.owner.identity}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
