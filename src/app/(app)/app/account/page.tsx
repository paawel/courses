import ContentBlock from "@/components/contentblock"
import H1 from "@/components/h1"

const page = () => {
  return (
    <main>
      <H1 className="my-8 text-white">
        Your Account
      </H1>

      <ContentBlock className="flex justify-center items-center h-[500px]">
        <p>
          Logged is as ...
        </p>
      </ContentBlock>
    </main>
  )
}

export default page