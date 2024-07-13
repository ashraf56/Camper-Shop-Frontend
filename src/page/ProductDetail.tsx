import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const data = useParams()
    console.log(data);
    
    return (
        <div>
            Product details
        </div>
    );
};

export default ProductDetail;