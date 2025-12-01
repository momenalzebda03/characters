type url = {
  epUrl: string;
};

function CardEpiscode({ epUrl }: url) {
    const episodeId = epUrl.split("/").pop();
    return <li>Episode {episodeId}</li>;
}

export default CardEpiscode;
