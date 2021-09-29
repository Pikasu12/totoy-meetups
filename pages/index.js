import Head from "next/head"
import { MongoClient } from "mongodb"

import MeetupList from "../components/meetups/MeetupList"
import { Fragment } from "react"

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "First Crewmate meetup",
//     image:
//       "https://storage.googleapis.com/stateless-thedailyfandom-org/2020/05/b346d487-2d9ccc4ddb63faf997d3a79260f12b07.jpeg",
//     address: "East blue",
//     description: "World greatest swordsman"
//   },
//   {
//     id: "m1",
//     title: "Second Crewmate meetup",
//     image:
//       "https://storage.googleapis.com/stateless-thedailyfandom-org/2020/05/b346d487-2d9ccc4ddb63faf997d3a79260f12b07.jpeg",
//     address: "East blue",
//     description: "World greatest swordsman"
//   }
// ]

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
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

  const client = await MongoClient.connect(
    "mongodb+srv://marco123:marco123@mynote.wabqn.mongodb.net/meetups?retryWrites=true&w=majority"
  )
  const db = client.db()

  const meetupsCollection = db.collection("meetups")

  const meetups = await meetupsCollection.find().toArray() //find is the same of finding all collection

  client.close()

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1
  }
}

export default HomePage
