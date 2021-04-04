import React, { Component } from 'react';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trangthai: 0
    }
  }

  alert = () => {
    alert("this is alert");
  }

  alert2 = (message) => {
    alert(message);
  }

  renderButton = () => (
    <div className="row justify-content-center">
      <div className="btn btn-info" onClick={this.editClick}>Edit</div>
      <div className="btn btn-warning" onClick={this.alert2.bind(this, "hihi")}>Remove</div>
      <div className="btn btn-primary" onClick={() => this.alert2(this, "hihi")}>Insert</div>
    </div>
  )

  renderForm = () => (
    <div className="row justify-content-center">
      <div className="form-group">
        <input defaultValue={this.state.trangthai} type="text" name="ten" className="form-control"/>
      </div>
      <div className="form-group">
        <div className="btn btn-primary" onClick={() => this.saveClick()}>Save</div>
      </div>
    </div>
  )

  displayCheck = () => {
    if(this.state.trangthai == 0){
      return this.renderButton();
    } else{
      return this.renderForm();
    }
  }

  editClick = () => {
    this.setState({trangthai: 1})
  }

  saveClick = () => {
    this.setState({trangthai: 0})
  }
 
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="row align-items-center">
              <div className={"col-lg-6 " + this.props.class_left}>
                <div className="p-5">
                  <img className="img-fluid rounded-circle" src={this.props.image_src} alt="" />
                </div>
              </div>
              <div className="col-lg-6 order-lg-1">
                <div className="p-5">
                  <h2 className="display-4">{this.props.title}</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>
                </div>
              </div>
            </div>
            {this.displayCheck()}
          </div>         
        </section>
      </div>
    );
  }
}

export default Content;