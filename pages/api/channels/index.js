import lists from "../../../components/channelList";

async function index(req, res) {
  const httpMethod = req.method;
  const {
    name,
    channelID,
    subscribers,
    image,
    total_views,
    categories,
    rate,
    availability,
    channelUrl,
    description,
    featured,
    contact,
  } = req.body;

  switch (httpMethod) {
    case "GET":
      await res.status(200).json(lists);
      break;
    case "POST":
      res.status(200).json({
        name,
        channelID,
        subscribers,
        image,
        total_views,
        categories,
        rate,
        availability,
        channelUrl,
        description,
        featured,
        contact,
      });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${httpMethod} is not allowed`);
      break;
  }
}

export default index;
