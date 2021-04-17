import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';

const GifGrid = ({category}) => {

    //    const [images, setImages] = useState([]);

    // useEffect(()=>{
    //     getGifs(category).then(img => { setImages(img) })
    // }, [category]);
    
    const {data:images, loading} = useFetchGifs(category);


    return (
        <>
            <h2 className="animate__animated animate__rollIn">{category}</h2>

            { loading && <p className="animate__animated animate__flip">Loading...</p> }

            <div className="card-grid">
                
                    {
                        images.map(img=>(
                        <GifGridItem
                        key={img.id}
                        {...img} />
                    ))
                    }

            </div>
        </>
    )
        
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid;