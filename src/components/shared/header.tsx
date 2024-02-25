interface HeaderProps {
  title: string
  subTitle: string
}

export default function Header({ title, subTitle }: HeaderProps) {
  return (
    <>
      <h2 className="h2-bold text-dark-600">{title}</h2>
      {subTitle && <p className="p-16-regular mt-4">{subTitle}</p>}
    </>
  )
}
