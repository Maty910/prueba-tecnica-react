import { useCatFact } from "../hooks/useCatFact"
import { useCatImage } from "../hooks/useCatImage"


export function Otro () {
    const { fact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

   

    return (
        <>
            {imageUrl && <img src={imageUrl} />}
        </>
    )
}