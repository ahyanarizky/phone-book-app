import React, {Component, PropTypes} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'
import ListItem from '../components/ListItem'
import AppTextInput from '../components/AppTextInput'
import SearchItem from '../components/SearchItem'

class App extends Component{
  render(){
    const {data, actions} = this.props
    return (
      <div>
        <h1>React Hacktiv8</h1>
        <SearchItem actions={actions}/>
        <AppTextInput onSave={actions.addData} />
        <ListItem data={data} actions={actions} />
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {data: state.data}
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(AppActions, dispatch)}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
