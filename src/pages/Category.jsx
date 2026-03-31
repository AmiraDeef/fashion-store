import { Link } from "react-router-dom";

export const CategoryCard = ({ category }) => {
  return (
    <Link to={`/categories/${category.name}`} className="text-decoration-none text-dark text-center">
      <div className="rounded-circle overflow-hidden shadow-sm mb-2" style={{ width: '120px', height: '120px', border: '2px solid #eee' }}>
        <img 
          src={`http://localhost:8000/${category.image}`} 
          alt={category.name} 
          className="w-100 h-100 object-fit-cover" 
        />
      </div>
      <h6 className="fw-bold">{category.name}</h6>
    </Link>
  );
};