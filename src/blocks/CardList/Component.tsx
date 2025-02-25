import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/utilities/ui'
import { Link } from '@payloadcms/ui'
import React from 'react'

type CardListProps = {
  cards: {
    title: string
    description: string
    image?: {
      url: string
    }
  }[]
}

const CardListBlock: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="card-list flex flex-row justify-center items-center">
      {cards.map((card, index) => (
        <Card className={cn('w-[380px] mx-4')} key={index}>
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription>{card.description}</CardDescription>
          </CardHeader>
          <CardContent>
            {card.image && (
              <img
                alt={card.title}
                className="w-full h-[200px] object-cover"
                src={card.image.url}
              />
            )}
          </CardContent>
          <CardFooter>
            <Link href="#" className={buttonVariants({ variant: 'outline' })}>
              Learn more
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default CardListBlock
