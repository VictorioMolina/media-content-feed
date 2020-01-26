import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import { getImageFromId } from '../utils/api'
import Card from './Card'

/* https://stackoverflow.com/questions/33040703/proper-use-of-const-for-defining-functions-in-javascript */
const keyExtractor = ({ id }) => id.toString()

export default class CardList extends React.Component {
    static propTypes = {
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                author: PropTypes.string.isRequired
            }),
        ).isRequired,
    }

    renderItem = (obj) => (
        <Card
            fullname={obj.item.author}
            image={{
                uri: getImageFromId(obj.item.id)
            }}
            linkText="Comments"
            onPressLinkText={() => console.log("Pressed!")}
        />
    )

    render() {
        const { items } = this.props

        return(
            <FlatList
                data={items}
                renderItem={this.renderItem}
                keyExtractor={keyExtractor}
            />
        )
    }
}
