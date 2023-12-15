import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6c87euoDlkPIcx6MmFXsoCYbZQPgXIC4BZg&usqp=CAU",
    address: "Bangalore, 6 India",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6c87euoDlkPIcx6MmFXsoCYbZQPgXIC4BZg&usqp=CAU",
    address: "Bangalore, 7 India",
    description: "This is the second meetup",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
