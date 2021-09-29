import { Fragment } from "react"

import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails() {
  const ref = useRef(initialValue)


  return (
    <MeetupDetail
      image="https://storage.googleapis.com/stateless-thedailyfandom-org/2020/05/b346d487-2d9ccc4ddb63faf997d3a79260f12b07.jpeg"
      title="The first crewmate"
      address="Some address"
      description="Sample"
    />
  )
}

export async function getStaticProps() {
  // fetch data for a single meetup

  return {
    props: {
      meetupData: {
        image: "https://storage.googleapis.com/stateless-thedailyfandom-org/2020/05/b346d487-2d9ccc4ddb63faf997d3a79260f12b07.jpeg",
        id: "m1",
        title: "The first crewmate",
        address: "Some address",
        description: "Sample"
      }
    }
  }
}

export default MeetupDetails
