import GifGrid from "../../components/GifGrid";
import {shallow} from 'enzyme';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    
    const category = 'One punch';
    

    test('debe renderizar correctamente', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true,
        });
        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        
    });
    
    test('debe mostrar items al cargar imagenes', () => {

        const gifs = [{
            id: '123',
            url: 'http://prueba.gif',
            title: 'prueba',
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false,
        });

        const wrapper = shallow(<GifGrid category={category}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
        
    });
    
    
})
