export default async function Page({ params }) {
    const handle = (await params).handle
    return <div>My Post: {handle}</div>
  }