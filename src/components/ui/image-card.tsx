import { cn } from "@/lib/utils"
import Image from "next/image"


type Props = {
  imageUrl: string
  caption: string
  className?: string
}

export default function ImageCard({ imageUrl, caption, className }: Props) {
  return (
    <figure
      className={cn(
        "w-62.5 overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow",
        className,
      )}
    >
      <Image className="w-full aspect-4/4 rounded-xs" src={imageUrl} alt="image" width={500} height={500} />
      <figcaption className="border-t-2 text-main-foreground border-border p-4">
        {caption}
      </figcaption>
    </figure>
  )
}
