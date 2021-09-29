import MeetupList from "../components/meetups/MeetupList"

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Crewmate meetup",
    image:
      "https://storage.googleapis.com/stateless-thedailyfandom-org/2020/05/b346d487-2d9ccc4ddb63faf997d3a79260f12b07.jpeg",
    address: "East blue",
    description: "World greatest swordsman"
  },
  {
    id: "m1",
    title: "Second Crewmate meetup",
    image:
      "https://storage.googleapis.com/stateless-thedailyfandom-org/2020/05/b346d487-2d9ccc4ddb63faf997d3a79260f12b07.jpeg",
    address: "East blue",
    description: "World greatest swordsman"
  }
]

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context) {
//   const req = context.req
//   const res = context.res

//   // fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
}

export default HomePage
