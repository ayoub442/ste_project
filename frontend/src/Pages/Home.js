import { Link } from 'react-router-dom';
import data from '../data';

function Home() {
  return (
    <div>
      <h1>STE CATALOGUE PIÈCES D'AUTOMOBILES</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button>ADD to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
