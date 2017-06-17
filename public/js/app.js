
class ProductList extends React.Component {
    render() {
        return (
            <div className="ui unstackable items">
                Hello, friend! I am a basic React Component
                <Product />
            </div>
        );
    }
}

class Product extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="image">
                    <img src="images/products/image-aqua.png"/>
                </div>
                <div className="middle aligned content">
                    <div className="description">
                        <a>Fort Knight</a>
                        <p>Authentic renaissance actors, delivered in just two weeks</p>
                    </div>
                    <div className="extra">
                        <span>Submitted by:</span>
                        <img 
                            src="images/avatars/daniel.jpg" 
                            className="ui avatar image"
                        />
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(
    <ProductList />,
    document.getElementById('content')
)