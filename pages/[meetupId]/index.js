const { Fragment } = require("react");
const {
  default: MeetupDetail,
} = require("../../components/meetups/MeetupDetail");

const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6c87euoDlkPIcx6MmFXsoCYbZQPgXIC4BZg&usqp=CAU"
      title="first meetup"
      address="Some street, 5 some city"
      description="This is the first meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6c87euoDlkPIcx6MmFXsoCYbZQPgXIC4BZg&usqp=CAU",
        id: meetupId,
        title: "first meetup",
        address: "Some street, 5 some city",
        description: "This is the first meetup",
      },
    },
  };
}

export default MeetupDetails;
