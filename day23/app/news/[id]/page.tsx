interface NewsParamsProps {
  params: Promise<{
    id: string
  }>
}

export default async function Page({ params }: NewsParamsProps) {
  const { id } = await params

  return (
    <div>
      This is Dynamic Page from News Pages id: {id}
    </div>
  )
}
