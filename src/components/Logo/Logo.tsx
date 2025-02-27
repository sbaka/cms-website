import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { loading: loadingFromProps, priority: priorityFromProps, className } = props

  const loading = loadingFromProps || 'lazy'
  const priority = priorityFromProps || 'low'

  return (
    /* eslint-disable @next/next/no-img-element */
    <img
      alt="Payload Logo"
      width={193}
      height={34}
      loading={loading}
      fetchPriority={priority}
      decoding="async"
      className={clsx('max-w-[9.375rem] w-full h-[34px]', className)}
      src="https://s3-alpha-sig.figma.com/img/c198/8b33/aaea03c5c43ace3d786898bc791dc7cb?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=m116SQuaEqihmakGpikkOzPExgOvXm4duoA9pO8JpEQks0qr2T~OStWD0DJyVX2apTS-XLycKCHEj5SRFNaCo0XIJHNZrkTpU4PRjuxXTwE06p9xH0ha5WCDxkYnMzUx16CQwOmZoNbje4WpqDdMQbBAkOUjgReov4UhhakGBSgMPSvgi5MddtRYd8pTIKVkw-hrWb~L2mHCsIL~YpyIWmCeLHJoThH7joX~D2GCjlAFPb2mMNdg3uw-ihoB5tMRJEwLIxieMAWjqvLW6mqyNFtVNXbLQ~m5kb6QXbibetUZDm77VFFZbIEfWHnHW4Z6LKgVjWSLMPnitZl-68dmjA__"
    />
  )
}
