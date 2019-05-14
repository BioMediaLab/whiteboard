import React, { Component } from 'react'
import fetchData from './utils/fetch-data'

class DataLoader extends Component {
  state = {
    isLoading: false,
    errors: [],
    data: null
  }

  loadData = url => {
    this.setState({ isLoading: true })

    return fetchData(url)
      .then(({ data }) => {
        this._dataRequest = null

        this.setState({ isLoading: false, data })
      })
      .catch(err => {
        this._dataRequest = null
        this.setState(prevState => {
          return {
            isLoading: false,
            errors: [...prevState.errors, err]
          }
        })
      })
  }

  componentDidMount() {
    if (this.props.url) {
      this._dataRequest = new AbortController()
      this.loadData(this.props.url, this._dataRequest.signal)
    }
  }

  componentWillUnmount() {
    if (this._dataRequest) {
      this._dataRequest.abort()
    }
  }

  render() {
    const { isLoading, errors, data } = this.state
    const {
      renderError = () => {},
      renderLoading = () => {},
      renderSuccess = () => {}
    } = this.props
    const hasErrors = errors.length > 0
    const hasData = typeof data !== undefined && data !== null

    return (
      <>
        {hasErrors && renderError(errors)}
        {isLoading && renderLoading()}
        {hasData && renderSuccess(data)}
      </>
    )
  }
}

export default DataLoader
