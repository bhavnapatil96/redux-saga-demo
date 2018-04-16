import React, { Component } from 'react';
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {

        overflowY: 'auto',

    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};
const tilesData = [
    {
        img:require('./e1.jpg'),
        title: 'Breakfast',
        author: 'jill111',
    },
    {
        img:require('./e2.jpg'),
        title: 'Tasty burger',
        author: 'pashminu',
    },
    {
        img: require('./e3.jpg'),
        title: 'Camera',
        author: 'Danson67',
    },
    {
        img: require('./e4.jpg'),
        title: 'Morning',
        author: 'fancycrave1',
    },
    {
        img:require('./e1.jpg'),
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: require('./e6.jpg'),
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img:require('./e3.jpg'),
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img:require('./e7.jpg'),
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
    {
        img:require('./e1.jpg'),
        title: 'Hats',
        author: 'Hans',
    },
    {
        img: require('./e6.jpg'),
        title: 'Honey',
        author: 'fancycravel',
    },
    {
        img:require('./e3.jpg'),
        title: 'Vegetables',
        author: 'jill111',
    },
    {
        img:require('./e7.jpg'),
        title: 'Water plant',
        author: 'BkrmadtyaKarki',
    },
];
class About extends Component {
    render() {
        return (

            <div style={styles.root} className="container-fluid">
                <br/>
                <GridList style={styles.gridList} cols={'4'}>
                    {tilesData.map((tile) => (
                        <GridTile
                            key={tile.img}
                            title={tile.title}
                            actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                            titleStyle={styles.titleStyle}
                            titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                        >
                            <img src={tile.img} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{

    }
}
export default withRouter(connect(mapStateToProps)(About));
