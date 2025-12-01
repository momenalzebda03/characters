import Link from "next/link";
import baseApi from "../../BaseApi/baseApi";
import CardEpiscode from "../../components/character/CardEpisode";

export default async function FriendPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res = await baseApi.get(`/character/${id}`);
  const data = res.data;

  return (
    <div style={{ padding: "30px" }}>
      <Link href="/">Back</Link>
      <h1>{data.name}</h1>
      <img
        src={data.image}
        alt={data.name}
        width={250}
        height={250}
        style={{ borderRadius: "12px" }}
      />
      <p>
        <strong>Status:</strong> {data.status}
      </p>
      <p>
        <strong>Species:</strong> {data.species}
      </p>
      <p>
        <strong>Gender:</strong> {data.gender}
      </p>
      <p>
        <strong>Origin:</strong> {data.origin?.name}
      </p>
      <p>
        <strong>Location:</strong> {data.location?.name}
      </p>
      <ul>
        {data.episode.map((epUrl: string) => {
          return <CardEpiscode key={epUrl} epUrl={epUrl} />
        })}
      </ul>
    </div>
  );
}
