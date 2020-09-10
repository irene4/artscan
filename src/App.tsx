import * as React from 'react';
import HeaderLogo from './components/HeaderLogo';
import './style/App.css';
import { Loader } from 'semantic-ui-react';
import MenuBar from './components/menu';
import ImportButton from './components/importButton';
import SaveOrDelete from './components/SaveOrDelete';
import Slider from './components/Slider';
import ProcessImage from 'react-imgpro';

export default class App extends React.Component<any, any> {
	constructor(props: any) {
		super(props);
		this.state = {
			imageURL: null,
			brightness: 0,
			contrast: 0,
			saturation: 0,
			activeItem: null,
			isProcessing: false,
		};
	}

	updateImage = (url: string) => {
		this.setState({ imageURL: url });
	};

	rmvImg = () => {
		this.setState({
			imageURL: null,
		});
	};

	updateEffects = (effect: any, value: any) => {
		this.setState({
			isProcessing: true,
			[effect]: value / 100.0,
		});
	};

	setActive = (item: any) => {
		this.setState({
			activeItem: item,
		});
	};

	auto = () => {
		this.setState({
			brightness: 0.05,
			contrast: 0.15,
			activeItem: null,
			isProcessing: true,
		});
	};

	render() {
		const { imageURL } = this.state; // Destructuring the state
		const { activeItem } = this.state;
		const { isProcessing } = this.state;

		return (
			<div className="App">
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<HeaderLogo />
				</div>
				<div id="menubar">
					<MenuBar setActive={this.setActive} activeItem={this.state.activeItem} auto={this.auto} isEnabled={imageURL !== null} />
				</div>
				<div id="importbtn">{imageURL === null && <ImportButton updateImage={this.updateImage} />}</div>
				{imageURL !== null && isProcessing && <Loader active inverted id="loader" />}
				<div id="container">
					<div id="image">
						{imageURL !== null && (
							<ProcessImage
								image={imageURL}
								brightness={this.state.brightness}
								contrast={this.state.contrast}
								//colors={{saturate: this.state.saturation}}
								onProcessFinish={() => {
									//Defined in index.d.ts
									this.setState({ isProcessing: false });
								}}
							/>
						)}
					</div>
				</div>
				<div id="slider">
					{activeItem !== null && imageURL !== null && (
						<Slider
							effect={this.state.activeItem}
							callbackFunction={this.updateEffects}
							effectValue={this.state[this.state.activeItem]}
						/>
					)}
				</div>
				<div id="saveOrRemoveBtn">
					{imageURL !== null && (
						<SaveOrDelete updateImage={this.updateImage} removeEffect={this.updateEffects} setActive={this.setActive} />
					)}
				</div>
			</div>
		);
	}
}

//<Slider effect="contrast" callbackFunction={this.updateEffects} effectValue={this.state["contrast"]}/>
//<canvas id="canvas"></canvas>
//<div id="sliderContainer">
//  <input id="contrast" name="contrast" type="range" min="-10" max="10" value="0"></input>
//</div>
//{imageURL !== null && (<Button id="rmvbtn" circular icon='x' color="red" onClick={(e) => { this.rmvImg() }}/>)}
