import React from 'react'
import PropTypes from 'prop-types'
import {
    View,
    Image,
    ActivityIndicator,
    StyleSheet
} from 'react-native'

import AuthorRow from './AuthorRow'

export default class Card extends React.Component {
    static propTypes = {
        fullname: PropTypes.string.isRequired,
        image: Image.propTypes.source.isRequired,
        linkText: PropTypes.string,
        onPressLinkText: PropTypes.func
    }

    static defaultProps = {
        linkText: '',
        onPressLinkText: () => { }
    }

    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    handleLoad = () => {
        this.setState({ loading: false })
    }

    render() {
        const { fullname, image, linkText, onPressLinkText } = this.props
        const { loading } = this.state

        return (
            <View>
                <AuthorRow
                    fullname={fullname}
                    linkText={linkText}
                    onPressLinkText={onPressLinkText}
                />
                <View style={styles.image}>
                    {loading && (
                        <ActivityIndicator
                            style={StyleSheet.absoluteFill}
                            size="large"
                            color="silver"
                        />
                    )}
                    <Image
                        style={StyleSheet.absoluteFill}
                        source={image}
                        onLoad={this.handleLoad}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        aspectRatio: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
    }
})
