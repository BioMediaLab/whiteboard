import React, { Suspense } from 'react'
import { graphqlOperation } from 'aws-amplify'
import { Connect } from 'aws-amplify-react'
import { SkeletonPage } from 'components/Skeleton'

const PagePlaceholder = () => {
  return (
    <div>
      <SkeletonPage />
    </div>
  )
}
export default ({
  query,
  queryOptions,
  mutation,
  mutationOptions,
  ...props
}) => {
  const pagePath = props.path.replace(/:/g, '_')
  const LoadedPage = React.lazy(() => import(`../../pages${pagePath}`))
  const queryOperationOptions = queryOptions ? queryOptions(props) : null
  const queryOperation = query
    ? graphqlOperation(query, queryOperationOptions)
    : {}
  const mutationOperation = mutation ? graphqlOperation(mutation) : {}

  return (
    <Connect query={queryOperation} mutation={mutationOperation}>
      {({ data, loading, error, mutation }) => {
        if (error) return <h3>Error</h3>
        if (loading || !data) return <PagePlaceholder />

        return (
          <Suspense fallback={<PagePlaceholder />}>
            <LoadedPage {...props} data={data} mutation={mutation} />
          </Suspense>
        )
      }}
    </Connect>
  )
}
