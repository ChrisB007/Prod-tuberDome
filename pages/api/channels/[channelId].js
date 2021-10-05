import lists from "./channelsList";

function channellistsId(req, res) {
  const listsId = req.query.listsId;

  const {
    name,
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

  const method = req.method;

  const filteredList = lists.filter((list) => list.id === parseInt(listsId));

  // Switch statement

  switch (method) {
    case "GET":
      if (filteredList.length > 0) {
        console.log("This is NOT empty");
        return res.status(200).json(filteredList[0]);
      } else {
        console.log("This is empty");
        res.status(404).json(`User with listsId: ${listsId} is not found`);
      }
      break;
    case "PUT":
      res.status.json({
        name,
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
    case "DELETE":
      res.status(200).json(filteredList[0]);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} not allowed`);
      break;
  }
}

export default channellistsId;
