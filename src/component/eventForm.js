import React from 'react';
import Dialog from 'material-ui/Dialog';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
const style = {
    margin: 12,
    float:"right"
};
class Event_Form extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            event:{}
        };
    }

    handleClose = () => {
        this.props.handleClose();
    };
    handleChange=(e)=> {
        const {value, name} = e.target;
        const {event} = this.state
        event[name]=value;
        this.setState({event})
    }
    addEvent = () => {
        debugger
        this.props.addEvent(this.state.event);
    };
    render() {
        return (
            <div>
                <Dialog
                    title="Event Form"
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.handleClose}
                    autoScrollBodyContent={true}
                >
                    <form onSubmit={this.addEvent}>
                        <TextField
                            hintText="Event Name"
                            floatingLabelText="Event Name"
                            name="name"
                            required="true"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <DatePicker style={{"color":"#651FFF"}}
                                    hintText="Event Date"
                                    floatingLabelText="Event Date"
                                    name="date"
                                    required="true"
                                    onChange={(e)=>{this.handleChange}}
                        />
                        <TextField
                            hintText="Event Organizer"
                            floatingLabelText="Event Organizer"
                            name="organizer"
                            required="true"
                            type="text"
                            onChange={this.handleChange}

                        />
                        <br/>
                        <RaisedButton type="submit" label="Save"  primary={true} style={style}  onClick={this.toggle}/>
                    </form>
                </Dialog>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        userReducer:state.userReducer
    }
}
function mapDispatchToProps(dispatch) {
    debugger
    return {
            addEvent: (event) => {dispatch({type: 'ADDEVENT',payload:event})
        }
    }
}export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Event_Form));


