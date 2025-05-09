import React from "react";                                
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      judul : 'ini judul dari state',
      dataMakanan : this.props.list,
    }
    this.handlePesan = this.handlePesan.bind(this);
  }
  handlePesan(pesan, e){
    e.preventDefault()
    alert(pesan)
    alert('hallo')
  }
render(){
  return (
    <div>
      <h2>Makanan Khas Indonesia</h2>
      <h3>{this.state.judul}</h3>
      <p>Mengakses props dari app secara langsung {this.props.list}</p>
      <p>Mengakses props dari State {this.state.dataMakanan}</p>
      <a href="/" onClick={(e) => this.handlePesan("Pesan dari parameter",e)}>Halaman Header</a>
    </div>
  );
}
}
export default Header;