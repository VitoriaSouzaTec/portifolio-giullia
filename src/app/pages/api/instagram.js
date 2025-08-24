export default async function handler(req, res) {
  try {
    const token = process.env.IG_ACCESS_TOKEN;
    const userId = process.env.IG_USER_ID;

    const response = await fetch(
      `https://graph.facebook.com/v20.0/${userId}?fields=followers_count,media_count&access_token=${token}`
    );

    const data = await response.json();
    res.status(200).json({
      followers: data.followers_count,
      posts: data.media_count,
    });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados do Instagram" });
  }
}
