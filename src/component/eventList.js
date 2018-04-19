import React from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Event_Form from './eventForm'
import RefreshIndicator from 'material-ui/RefreshIndicator';
const styleloader = {
    container: {
        position: 'relative',
    },
    refresh: {
        display: 'inline-block',
        position: 'relative',
    },
};
const style = {
    margin: 12,
    float:"right"
};

const style1 = {
    margin: 15,
    paddingRight:40,
    paddingLeft:40

};

class Event_List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isActive:false,
            total:23,
            currentCount:4,
            offset:4,
            event_list:[],
            isFetching:false
        }
    }

    likesevent=(eid)=>{
        debugger;
        let data={
            userId:localStorage.getItem('userId'),
            eventId:eid
        };
        this.props.giveLikes(data);
    }
    componentWillMount(){
        debugger
        this.props.fetchEvents();
        //this.loadInitialContent()

    }
    componentWillReceiveProps(next){
        debugger
        this.setState({
            event_list:next.eventList
        },()=>{this.loadInitialContent()})


    }
    toggle=(e)=>{
        debugger;
        this.setState({
            isActive:!this.state.isActive
        })
    }

    forceLoadOnScroll=()=>{

    }
    loadInitialContent=()=>{
        debugger
        console.log('load',this.state.event_list)
        //Get content from server using your preferred method (like AJAX, relay)
        let ary = this.state.event_list && this.state.event_list.slice(0,this.state.offset);
        this.setState({event_list:ary});
    }
    loadOnScroll = (e) =>{
        if(this.state.currentCount == this.state.total) return;
        var el = document.getElementById('content-end');
        var rect = el.getBoundingClientRect();
        var isAtEnd = (
            // rect.top >= 0 &&
            // rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
        if(isAtEnd){
            //User at the end of content. load more content
            if(!this.state.isFetching){

                this.setState({isFetching:true});

                //get content from server
                setTimeout(() => {
                    var count = this.state.currentCount + this.state.offset
                    if(this.state.currentCount !== this.state.total){
                        this.setState({
                            isFetching:false,
                            currentCount:count,
                            event_list: this.props.eventList.slice(0, count)
                        },()=>{console.log('state',this.state.event_list)})
                    }
                }, 100);
            }
        }
    }
    componentDidMount(){
        debugger
        window.addEventListener('scroll', this.loadOnScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.loadOnScroll);
    }

    render() {
        console.log('Reciver',this.state.event_list)

        debugger
        return (
            <div className="App">
                <RaisedButton label="Add"  primary={true} style={style}  onClick={this.toggle}/>
                <br/><br/>
                {
                    this.state.event_list && this.state.event_list.map((event)=>{
                        return  <div style={style1}><Card>
                            <CardHeader
                                title={<p><Avatar src={require('./u1.png')}/>&nbsp;&nbsp;&nbsp;{event.name} </p>}
                                subtitle={event.organizer}
                                actAsExpander={true}
                                showExpandableButton={true}

                            />
                            <CardActions>
                                <FlatButton label="Like" onClick={()=>{this.likesevent(event._id)}}/>
                                <label>{event.likes}</label>
                            </CardActions>
                            <CardText expandable={true}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                        </Card>
                        </div>
                    })
                }
                {
                    (this.state.currentCount !== this.state.total)?

                        <center><RefreshIndicator
                    id="content-end"
                    size={70}
                    left={10}
                    top={0}
                    status="loading"
                    style={styleloader.refresh}
                    onClick={e => this.forceLoadOnScroll()}
                        /></center>:null

                }
                <Event_Form open={this.state.isActive} handleClose={this.toggle}/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    debugger
    return{
        eventList:state.eventReducer.eventList
    }
}
function matchDispatchToProps (dispatch) {
    return {
        fetchEvents: () => {
            dispatch({type: 'EVENTLIST'})
        },
        giveLikes:(data)=>{
            dispatch({type: 'UPDATEEVENT',
            payload:data})

        }
    }
}
export default withRouter(connect(mapStateToProps,matchDispatchToProps )(Event_List));
