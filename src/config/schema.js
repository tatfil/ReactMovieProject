import classification from "./classification";

const schema = {
  name: {
    label: "User name",
    show: true,
    samples: ["TV", "MovieReact", "MyName"],
    align: "left",
  },
  year: {
    label: "Year",
    type: "year",
    show: true,
    samples: [2015, 2013, 2021],
  },
  title: {
    label: "Movie",
    type: "suggest",
    options: classification.movies,
    show: true,
    samples: ["Barbie", "The Holdovers", "Wish"],
    align: "left",
  },
  rating: {
    label: "Rating",
    type: "rating",
    show: true,
    samples: [3, 1, 5],
  },
  comments: {
    label: "Comments",
    type: "textarea",
    samples: ["Nice", "Not so bad", "Great!"],
  },
};

export default schema;
