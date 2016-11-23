import React, {Component, PropTypes} from 'react'

class DataItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			name: this.props.data.name || '',
			phone: this.props.data.phone || ''
		}
	}

	handleNameChange(e) {
		this.setState({
			name: e.target.value
		})
	}

	handlePhoneChange(e) {
		this.setState({
			phone: e.target.value
		})
	}

	handleEditClick(e) {
		this.setState({editing: true})
	}

	handleSaveEdit(e) {
		e.preventDefault()
		var name = this.state.name.trim()
		var phone = this.state.phone.trim()
		if(!name || !phone){
			return ;
		}
		this.props.editData(this.props.data.id, name, phone)
		this.setState({editing: false})
	}

	render() {
		const {data, deleteData, editData} = this.props
		if(this.state.editing){
			return(
					<div className="well well-lg">
					<div className="row">
						<div className="col-sm-6 col-sm-offset-3">
						<form onSubmit = {this.handleSaveEdit.bind(this)}>
							<input type="text" placeholder="Enter name" className="form-control" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
							<input type="text" placeholder="Enter phone no." className="form-control" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)}/>
							<button type="submit" className="btn btn-block btn-md btn-warning">Edit</button>
						</form>
						</div>
					</div>
					</div>
				)
		}
		else {
			return (
				<div className="well well-lg">
					<h2>{data.name}</h2>
					<h5>{data.phone}</h5>
					<div className="btn btn-sm btn-warning" onClick={this.handleEditClick.bind(this)}>Edit</div>
					<div className="btn btn-sm btn-danger" onClick={() => confirm("Yakin?") === true ? deleteData(data.id) : false}>Delete</div>
				</div>
				)
		}
	}
}

DataItem.propTypes = {
	data: PropTypes.object.isRequired,
	deleteData: PropTypes.func.isRequired,
	editData: PropTypes.func.isRequired
}

export default DataItem