
import React, { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext'; // Adjust path based on your structure
import Navbar from '../../Components/navbar';
import '../../Assets/CSS/product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as farStar, faHeart } from '@fortawesome/free-solid-svg-icons';
const products = [
  {
    id: 1,
    category: 'Educational Toys',
    name: 'Alphabet Blocks',
    image: require('../../Assets/Images/i1.jpg'),
    reviews: 4.5,
    price: 19.99,
    ageRange: '2-4',
    brand: 'EduToys'
  },
  {
    id: 2,
    category: 'Board Games',
    name: 'Chess Set',
    image: require('../../Assets/Images/i2.jpg'),
    reviews: 4.5,
    price: 29.99,
    ageRange: '8-10',
    brand: 'EduToys'
  },
  {
    id: 3,
    category: 'Action Figures',
    name: 'Superhero Action Figure',
    image: require('../../Assets/Images/i3.jpg'),
    reviews: 4,
    price: 14.99,
    ageRange: '5-10',
    brand: 'EduToys'
  },
  {
    id: 4,
    category: 'Puzzles',
    name: 'Jigsaw Puzzle - 1000',
    image: require('../../Assets/Images/i4.jpg'),
    reviews: 3.5,
    price: 22.99,
    ageRange: '8-10',
    brand: 'EduToys'
  },
  {
    id: 5,
    category: 'Dolls',
    name: 'Fashion Doll',
    image: require('../../Assets/Images/i5.jpg'),
    reviews: 4,
    price: 12.99,
    ageRange: '3-7',
    brand: 'EduToys'
  },
  {
    id: 6,
    category: 'Outdoor Toys',
    name: 'Play Tent',
    image: require('../../Assets/Images/i6.jpg'),
    reviews: 4.5,
    price: 34.99,
    ageRange: '3-6',
    brand: 'EduToys'
  },
  {
    id: 7,
    category: 'Educational Toys',
    name: 'Number Counting Game',
    image: require('../../Assets/Images/i7.jpg'),
    reviews: 3.5,
    price: 16.99,
    ageRange: '4-7',
    brand: 'EduToys'
  },
  {
    id: 8,
    category: 'Board Games',
    name: 'Scrabble Junior',
    image: require('../../Assets/Images/i8.jpg'),
    reviews: 3,
    price: 24.99,
    ageRange: '6-8',
    brand: 'ToyBrand'
  },
  {
    id: 9,
    category: 'Action Figures',
    name: 'Robot Action Figure',
    image: require('../../Assets/Images/i9.jpg'),
    reviews: 4,
    price: 18.99,
    ageRange: '6-12',
    brand: 'ToyBrand'
  },
  {
    id: 10,
    category: 'Puzzles',
    name: '3D Puzzle - Eiffel Tower',
    image: require('../../Assets/Images/i10.jpg'),
    reviews: 4.5,
    price: 27.99,
    ageRange: '8-10',
    brand: 'ToyBrand'
  },
  {
    id: 11,
    category: 'Dolls',
    name: 'Baby Doll Set',
    image: require('../../Assets/Images/i11.jpg'),
    reviews: 4,
    price: 29.99,
    ageRange: '2-4',
    brand: 'ToyBrand'
  },
  {
    id: 12,
    category: 'Outdoor Toys',
    name: 'Kids’ Trampoline',
    image: require('../../Assets/Images/i12.jpg'),
    reviews: 3.5,
    price: 89.99,
    ageRange: '4-6',
    brand: 'ToyBrand'
  },
  {
    id: 13,
    category: 'Educational Toys',
    name: 'Science Kit',
    image: require('../../Assets/Images/i13.jpg'),
    reviews: 3,
    price: 39.99,
    ageRange: '8-10',
    brand: 'ToyBrand'
  },
  {
    id: 14,
    category: 'Board Games',
    name: 'Monopoly Junior',
    image: require('../../Assets/Images/i14.jpg'),
    reviews: 4.6,
    price: 21.99,
    ageRange: '4-6',
    brand: 'ToyBrand'
  },
  {
    id: 15,
    category: 'Action Figures',
    name: 'Dinosaur Action Figure',
    image: require('../../Assets/Images/i15.jpg'),
    reviews: 4,
    price: 15.99,
    ageRange: '6-8',
    brand: 'ToyBrand'
  },
];

const ProductCatalog = () => {
const { addToCart } = useContext(CartContext); 
const [filters, setFilters] = useState({
    ageRange: '',
    brand: '',
    priceRange: '',
    popularity: '',
    category: '',
});
const [likedProducts, setLikedProducts] = useState(new Set());
const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
};

const handleAddToCart = (product) => {
    addToCart(product);
};
const toggleLike = (productId) => {
    setLikedProducts((prevLiked) => {
      const newLiked = new Set(prevLiked);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
};

const filteredProducts = products.filter((product) => {
    return (
      (filters.ageRange ? product.ageRange === filters.ageRange : true) &&
      (filters.brand ? product.brand === filters.brand : true) &&
      (filters.priceRange ? product.price <= parseFloat(filters.priceRange) : true) &&
      (filters.popularity ? product.popularity === parseInt(filters.popularity) : true) &&
      (filters.category ? product.category === filters.category : true)
    );
});

const renderStars = (reviews) => {
const fullStars = Math.floor(reviews);
const halfStar = reviews % 1 !== 0;
const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="star" />);
    }

    if (halfStar) {
      stars.push(<FontAwesomeIcon key="half" icon={faStarHalfAlt} className="star" />);
    }

    for (let i = stars.length; i < 5; i++) {
      stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={farStar} className="star empty-star" />);
    }

    return stars;
  };
  return (
    <div>
    <Navbar/>
    <br></br><br></br><br></br><br></br><br></br>
    <div className="product-catalog-page">
    <h1>PRODUCT CATALOG</h1>
    <div className="filters">
    <select name="ageRange" value={filters.ageRange} onChange={handleFilterChange}>
    <option value="">Age Range</option>
    <option value="2-4">2-4</option>
    <option value="4-6">4-6</option>
    <option value="6-8">6-8</option>
    <option value="8-10">8-10</option>
    </select>
    <select name="brand" value={filters.brand} onChange={handleFilterChange}>
    <option value="">Brand</option>
    <option value="EduToys">EduToys</option>
    <option value="ToyBrand">ToyBrand</option>
    </select>
    <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange}>
    <option value="">Price Range</option>
    <option value="20">Under $20</option>
    <option value="50">Under $50</option>
    <option value="100">Under $100</option>
    </select>
    <select name="popularity" value={filters.popularity} onChange={handleFilterChange}>
    <option value="">Popularity</option>
    <option value="1">1 Star</option>
    <option value="2">2 Stars</option>
    <option value="3">3 Stars</option>
    <option value="4">4 Stars</option>
    <option value="5">5 Stars</option>
    </select>
    <select name="category" value={filters.category} onChange={handleFilterChange}>
    <option value="">Category</option>
    <option value="Educational Toys">Educational Toys</option>
    <option value="Board Games">Board Games</option>
    <option value="Action Figures">Action Figures</option>
    <option value="Puzzles">Puzzles</option>
    <option value="Dolls">Dolls</option>
    <option value="Outdoor Toys">Outdoor Toys</option>
    </select>
    </div>
    <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>PRICE : ${product.price}</p>
            <div className="stars">{renderStars(product.reviews)}</div>
            <button 
              className="add-to-cart-button"
              onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <FontAwesomeIcon
                icon={faHeart}
                className={`heart-icon ${likedProducts.has(product.id) ? 'liked' : ''}`}
                onClick={() => toggleLike(product.id)}/>
          </div>
        ))}
      </div></div></div>
  );
};
export default ProductCatalog;
