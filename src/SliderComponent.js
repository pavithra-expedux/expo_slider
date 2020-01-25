import React from 'react'
import { Slider } from 'react-native-elements'

export default class SliderComponent extends React.Component {
    state = {
        value : 1
    }

    changeSpeedValue = (value) => {
        this.setState({
            value : 3
        })
    }
    render() {
        return <Slider
            value={this.state.value}
            minimumValue={0}
            maximumValue={10}
            step={1}
            minimumTrackTintColor='#de902f'
            thumbTintColor='#de902f'
            maximumTrackTintColor="#e8eaed"
            onSlidingComplete={this.changeSpeedValue}
        />
    }
}
