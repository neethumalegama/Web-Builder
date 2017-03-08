import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
      super();
      this.toggleDiv = this.toggleDiv.bind(this);
	  this.state = {
            numChildren: 0
        };

   };
   toggleDiv() {
		$(this.refs['toggle-div']).slideDown();
		$(this.refs['popover']).show();
	}

   render() {
		const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<ChildComponent onToggleDiv = {this.toggleDiv} key={i} />);
        };
      return (
       <div className="container">
		  <h3>Web Builder</h3>
		  <button className="btn btn-primary btn-lg" data-toggle="popover-x" data-target="#myPopover3" data-placement="auto" onClick={this.toggleDiv}>Add components</button>
			<div id="myPopover3" className="popover popover-default" ref="popover">
				<div className="arrow"></div>
				<h3 className="popover-title"><span className="close pull-right" data-dismiss="popover-x">&times;</span>Components</h3>
				<div className="popover-content">
					 <ParentComponent addChild={this.onAddChild.bind(this)}>
					</ParentComponent>
				</div>
			</div>
		<div className="wrapper">
		  <div ref="toggle-div" className="component-container" id ="myDiv"></div>
		  {children}
		</div>

		
	  </div>
      );
   }
   
   onAddChild () {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
		$(this.refs['toggle-div']).hide();
		$(this.refs['popover']).hide();
    }
}

class ParentComponent extends React.Component {
    render () {
		return(
			<div className="component">
				<p><a href="#" onClick={this.props.addChild}>Add Another Child Component</a></p>
				<div id="children-pane">
				  {this.props.children}
				</div>
			</div>
		)
    }
}

class ChildComponent extends React.Component {
    render () {
        return (
			<div className="section">
				<div className="component">
				  <div className="jumbotron">
					<h1>Bootstrap Tutorial</h1> 
					<p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
					responsive, mobile-first projects on the web.</p> 
				  </div>
				  <p>This is some text.</p> 
				  <p>This is another text.</p> 
				</div>
				<div className="add-section-container"> <button className="btn btn-primary btn-lg add-section hide" >Add components</button> </div>
			</div>	
        );
    }
}
export default App;




