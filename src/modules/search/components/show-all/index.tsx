import { useModal } from "@lib/context/modal-context"
import { Container, Text } from "@medusajs/ui"
import InteractiveLink from "@modules/common/components/interactive-link"

const ShowAll = ({ close }: { close: () => void }) => {

  if ('' === "") return null

  if (0) {
    return (
      <Container className="flex gap-2 justify-center h-fit py-2">
        <Text>No results found.</Text>
      </Container>
    )
  }

  return (
    <Container className="flex flex-col small:flex-row gap-2 justify-center items-center h-fit py-4 small:py-2">
      <Text>Showing the first 6 results.</Text>
      <InteractiveLink href={`/search/${query}`} onClick={close}>
        View all
      </InteractiveLink>
    </Container>
  )
}

export default ShowAll
