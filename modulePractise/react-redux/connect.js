import React, { Component, bindActionCreators } from 'react'
import hoistStatics from 'hoist-non-react-statics'

const defaultMapDispatchToProps = ''

let nextVersion = 0

function wrapActionCreators(actionCreators) {
  return dispatch => bindActionCreators(actionCreators, dispatch)
}

export default function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
  const version = nextVersion++
  return function wrappWithConnect(WrappedComponent) {
    let mapDispatch

    if(!mapDispatchToProps) {
      mapDispatch = defaultMapDispatchToProps
    } else if(typeof mapDispatchToProps === 'function') {
      mapDispatch = mapDispatchToProps
    } else {
      mapDispatch = wrapActionCreators(mapDispatchToProps)
    }

    class Connect extends Component {
      constructor(props, context) {
        super(props, context)
        this.version = version
        this.store = props.store || context.store
      }
      computeDispatchProps(store, props) {
        if(!this.finalMapDispatchToProps) {
          return this.configureFinalMapDispatch(store, props)
        }

        const { dispatch } = store
        const dispatchProps = this.doDispatchPropsDependOnOwnProps ?
          this.finalMapDispatchToProps(dispatch, props) :
          this.finalMapDispatchToProps(dispatch)

        return dispatchProps
      }

      configureFinalMapDispatch(store, props) {
        const mappedDispatch = mapDispatch(store.dispatch, props)
        const isFactory = typeof mappedDispatch === 'function'

        this.finalMapDispatchToProps = isFactory ? mappedDispatch : mapDispatch

        if(isFactory) {
          return this.computeDispatchProps(store, props)
        }

        return mappedDispatch
      }

      render() {

      }
    }
    Connect.WrappedComponent = WrappedComponent

    return hoistStatics(Connect, WrappedComponent)
  }
}
